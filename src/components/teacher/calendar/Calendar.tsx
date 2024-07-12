import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { EventInput, EventClickArg } from '@fullcalendar/core';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';
import { Event } from '@mui/icons-material';

const eventTitles = ['Meeting', 'Birthday', 'Appointment', 'Holiday'];
const eventColors: { [key: string]: string } = {
  Meeting: '#1976d2',
  Birthday: '#ff5722',
  Appointment: '#4caf50',
  Holiday: '#ffc107',
};

interface EventDetailsProps {
  event: EventClickArg | null;
  open: boolean;
  handleClose: () => void;
  handleDelete: () => void;
  handleUpdateEvent: (updatedEvent: EventInput) => void;
}

const EventDetails: React.FC<EventDetailsProps> = ({
  event,
  open,
  handleClose,
  handleDelete,
  handleUpdateEvent,
}) => {
  const [editedTitle, setEditedTitle] = useState<string>('');
  const [editedStartDate, setEditedStartDate] = useState<string>('');
  const [editedEndDate, setEditedEndDate] = useState<string>('');
  const [editedStartTime, setEditedStartTime] = useState<string>('');
  const [editedEndTime, setEditedEndTime] = useState<string>('');

  useEffect(() => {
    if (event) {
      setEditedTitle(event.event.title || '');
      const startDateTime = new Date(event.event.start!);
      const endDateTime = new Date(event.event.end!);
      setEditedStartDate(startDateTime.toISOString().slice(0, 10));
      setEditedEndDate(endDateTime.toISOString().slice(0, 10));
      setEditedStartTime(formatTime(startDateTime));
      setEditedEndTime(formatTime(endDateTime));
    }
  }, [event]);

  const formatTime = (date: Date): string => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const handleTitleChange = (e: SelectChangeEvent<string>) => {
    setEditedTitle(e.target.value);
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedStartDate(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedEndDate(e.target.value);
  };

  const handleStartTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedStartTime(e.target.value);
  };

  const handleEndTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedEndTime(e.target.value);
  };

  const handleSave = () => {
    if (event) {
      const startDateTime = new Date(`${editedStartDate}T${editedStartTime}`);
      const endDateTime = new Date(`${editedEndDate}T${editedEndTime}`);

      const updatedEvent: EventInput = {
        id: event.event.id,
        title: editedTitle,
        start: startDateTime.toISOString(),
        end: endDateTime.toISOString(),
        backgroundColor: eventColors[editedTitle] || event.event.backgroundColor,
        borderColor: eventColors[editedTitle] || event.event.backgroundColor,
      };

      handleUpdateEvent(updatedEvent);
    }
    handleClose();
  };

  const handleDeleteClick = () => {
    handleDelete();
    handleClose();
  };

  const handleCancel = () => {
    handleClose();
  };

  if (!event) {
    return null;
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          borderRadius: '20px',
          bgcolor: '#f0f0f0',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <DialogTitle sx={{ fontSize: '1.5rem', borderBottom: '1px solid #ccc' }}>
        <Event />
        <FormControl fullWidth margin="dense">
          <InputLabel>Event Title</InputLabel>
          <Select
            label="Event Title"
            value={editedTitle}
            onChange={handleTitleChange}
          >
            {eventTitles.map((title) => (
              <MenuItem key={title} value={title}>
                {title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="Start Date"
              type="date"
              fullWidth
              value={editedStartDate}
              onChange={handleStartDateChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="End Date"
              type="date"
              fullWidth
              value={editedEndDate}
              onChange={handleEndDateChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="Start Time"
              type="time"
              fullWidth
              value={editedStartTime}
              onChange={handleStartTimeChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="End Time"
              type="time"
              fullWidth
              value={editedEndTime}
              onChange={handleEndTimeChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions
        sx={{
          borderTop: '1px solid #ccc',
          padding: '10px 20px',
        }}
      >
        <Button
          onClick={handleDeleteClick}
          color="error"
          variant="outlined"
          sx={{ bgcolor: '#ff0000', color: 'white', '&:hover': { bgcolor: '#cc0000' } }}
        >
          Delete
        </Button>
        <Button
          onClick={handleSave}
          color="primary"
          variant="contained"
          sx={{ bgcolor: '#4caf50', color: 'white', '&:hover': { bgcolor: '#388e3c' } }}
        >
          Save
        </Button>
        <Button
          onClick={handleCancel}
          color="primary"
          variant="outlined"
          sx={{ bgcolor: '#2196f3', color: 'white ', '&:hover': { bgcolor: '#1976d2' } }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const Calendar: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventClickArg | null>(null);
  const [open, setOpen] = useState(false);
  const [events, setEvents] = useState<EventInput[]>([
    // Sample event data can be placed here
  ]);
  const [newEventDialogOpen, setNewEventDialogOpen] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventStartDate, setNewEventStartDate] = useState('');
  const [newEventEndDate, setNewEventEndDate] = useState('');
  const [newEventStartTime, setNewEventStartTime] = useState('');
  const [newEventEndTime, setNewEventEndTime] = useState('');

  const handleEventClick = (clickInfo: EventClickArg) => {
    setSelectedEvent(clickInfo);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedEvent(null);
  };

  const handleDateClick = (arg: DateClickArg) => {
    setNewEventStartDate(arg.dateStr);
    setNewEventEndDate(arg.dateStr);
    setNewEventDialogOpen(true);
  };

  const handleNewEventDialogClose = () => {
    setNewEventDialogOpen(false);
    setNewEventTitle('');
    setNewEventStartDate('');
    setNewEventEndDate('');
    setNewEventStartTime('');
    setNewEventEndTime('');
  };

  const handleAddNewEvent = () => {
    if (newEventTitle.trim() && newEventStartDate && newEventEndDate && newEventStartTime && newEventEndTime) {
      const newEvent: EventInput = {
        id: String(events.length + 1), // Assign unique ID
        title: newEventTitle,
        start: new Date(`${newEventStartDate}T${newEventStartTime}:00`).toISOString(),
        end: new Date(`${newEventEndDate}T${newEventEndTime}:00`).toISOString(),
        backgroundColor: eventColors[newEventTitle] || '#1976d2',
        borderColor: eventColors[newEventTitle] || '#1976d2',
      };
      setEvents([...events, newEvent]);
      setNewEventDialogOpen(false);
      setNewEventTitle('');
      setNewEventStartDate('');
      setNewEventEndDate('');
      setNewEventStartTime('');
      setNewEventEndTime('');
    }
  };

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      const updatedEvents = events.filter(
        (event) => event.id !== selectedEvent.event.id
      );
      setEvents(updatedEvents);
      setOpen(false);
    }
  };

  const handleUpdateEvent = (updatedEvent: EventInput) => {
    if (selectedEvent) {
      const updatedEvents = events.map((event) => {
        if (event.id === updatedEvent.id) {
          return updatedEvent;
        }
        return event;
      });
      setEvents(updatedEvents);
    }
  };

  return (
    <Grid
      container
      spacing={1}
      sx={{ width: '100%', bgcolor: 'white', border: '1px solid', borderRadius: '5px', mt: 7, ml: 1, pr: 0.5 }}
    >
      <Grid item xs={12}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          events={events}
          eventClick={handleEventClick}
          dateClick={handleDateClick}
          editable={true}
          eventDrop={(info) =>
            handleUpdateEvent({
              id: info.event.id,
              title: info.event.title,
              start: info.event.start?.toISOString(),
              end: info.event.end?.toISOString(),
              backgroundColor: info.event.backgroundColor,
              borderColor: info.event.borderColor,
            })
          }
          eventResize={(info) =>
            handleUpdateEvent({
              id: info.event.id,
              title: info.event.title,
              start: info.event.start?.toISOString(),
              end: info.event.end?.toISOString(),
              backgroundColor: info.event.backgroundColor,
              borderColor: info.event.borderColor,
            })
          }
          eventBackgroundColor="#1976d2"
          eventBorderColor="#1976d2"
          dayMaxEventRows={true}
          dayMaxEvents={true}
          height="auto"
        />
      </Grid>
      <Grid item xs={12}>
        <EventDetails
          event={selectedEvent}
          open={open}
          handleClose={handleClose}
          handleDelete={handleDeleteEvent}
          handleUpdateEvent={handleUpdateEvent}
        />
      </Grid>

      <Dialog open={newEventDialogOpen} onClose={handleNewEventDialogClose}>
        <DialogTitle>Add New Event</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="dense">
            <InputLabel>Event Title</InputLabel>
            <Select
              value={newEventTitle}
              label="Event Title"
              onChange={(e: SelectChangeEvent<string>) => setNewEventTitle(e.target.value)}
            >
              {eventTitles.map((title) => (
                <MenuItem key={title} value={title}>
                  {title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            label="Start Date"
            type="date"
            fullWidth
            value={newEventStartDate}
            onChange={(e) => setNewEventStartDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            margin="dense"
            label="End Date"
            type="date"
            fullWidth
            value={newEventEndDate}
            onChange={(e) => setNewEventEndDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            margin="dense"
            label="Start Time"
            type="time"
            fullWidth
            value={newEventStartTime}
            onChange={(e) => setNewEventStartTime(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            margin="dense"
            label="End Time"
            type="time"
            fullWidth
            value={newEventEndTime}
            onChange={(e) => setNewEventEndTime(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleNewEventDialogClose}
            color="primary"
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            onClick={handleAddNewEvent}
            color="primary"
            variant="contained"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Calendar;
