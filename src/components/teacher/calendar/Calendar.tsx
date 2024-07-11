import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { EventInput, EventClickArg } from '@fullcalendar/core';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Grid, MenuItem, Select, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';
import { Event } from '@mui/icons-material';

const eventTitles = ['Meeting', 'Birthday', 'Appointment', 'Holiday'];

interface EventDetailsProps {
  event: EventClickArg | null;
  open: boolean;
  handleClose: () => void;
  handleDelete: () => void;
  handleUpdateEvent: (updatedEvent: EventInput) => void;
}

const EventDetails: React.FC<EventDetailsProps> = ({ event, open, handleClose, handleDelete, handleUpdateEvent }) => {
  const [editedTitle, setEditedTitle] = useState<string>('');
  const [editedStartTime, setEditedStartTime] = useState<string>('');
  const [editedEndTime, setEditedEndTime] = useState<string>('');

  useEffect(() => {
    if (event) {
      setEditedTitle(event.event.title || '');
      const startDateTime = new Date(event.event.start!);
      const endDateTime = new Date(event.event.end!);
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

  const handleStartTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedStartTime(e.target.value);
  };

  const handleEndTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedEndTime(e.target.value);
  };

  const handleSave = () => {
    if (event) {
      const startDateTime = new Date(event.event.start!);
      const endDateTime = new Date(event.event.end!);

      const [startHours, startMinutes] = editedStartTime.split(':').map(Number);
      const [endHours, endMinutes] = editedEndTime.split(':').map(Number);

      startDateTime.setHours(startHours, startMinutes);
      endDateTime.setHours(endHours, endMinutes);

      const updatedEvent: EventInput = {
        id: event.event.id,
        title: editedTitle,
        start: startDateTime.toISOString(),
        end: endDateTime.toISOString(),
        color: event.event.backgroundColor
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
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { borderRadius: '20px', bgcolor: '#f0f0f0', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' } }}>
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
      <DialogActions sx={{ borderTop: '1px solid #ccc', padding: '10px 20px' }}>
        <Button onClick={handleDeleteClick} color="error" variant="outlined">
          Delete
        </Button>
        <Button onClick={handleSave} color="primary" variant="contained">
          Save
        </Button>
        <Button onClick={handleCancel} color="primary" variant="outlined">
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
    // ข้อมูลตัวอย่าง Event สามารถใส่ตรงนี้ได้
  ]);
  const [newEventDialogOpen, setNewEventDialogOpen] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventDate, setNewEventDate] = useState('');
  const [newEventStartTime, setNewEventStartTime] = useState('');
  const [newEventEndTime, setNewEventEndTime] = useState('');
  const [newEventColor, setNewEventColor] = useState('#1976d2');

  const eventTitles = ['Meeting', 'Birthday', 'Appointment', 'Holiday'];

  const handleEventClick = (clickInfo: EventClickArg) => {
    setSelectedEvent(clickInfo);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedEvent(null);
  };

  const handleDateClick = (arg: DateClickArg) => {
    setNewEventDate(arg.dateStr);
    setNewEventDialogOpen(true);
  };

  const handleNewEventDialogClose = () => {
    setNewEventDialogOpen(false);
    setNewEventTitle('');
    setNewEventColor('#1976d2');
    setNewEventStartTime('');
    setNewEventEndTime('');
  };

  const handleAddNewEvent = () => {
    if (newEventTitle.trim() && newEventStartTime && newEventEndTime) {
      const newEvent: EventInput = {
        id: String(events.length + 1), // Assign unique ID
        title: newEventTitle,
        start: new Date(`${newEventDate}T${newEventStartTime}:00`).toISOString(),
        end: new Date(`${newEventDate}T${newEventEndTime}:00`).toISOString(),
        backgroundColor: newEventColor,
        borderColor: newEventColor,
      };
      setEvents([...events, newEvent]);
      setNewEventDialogOpen(false);
      setNewEventTitle('');
      setNewEventColor('#1976d2');
      setNewEventStartTime('');
      setNewEventEndTime('');
    }
  };

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      const updatedEvents = events.filter((event) => event.id !== selectedEvent.event.id);
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
    <Grid container spacing={3} sx={{ width: '100%' }} className="pt-10 pl-10">
      <Grid item xs={12}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          events={events}
          eventClick={handleEventClick}
          dateClick={handleDateClick}
          editable={true}
          eventDrop={(info) => console.log(info.event.title, info.event.start, info.event.end)}
          eventResize={(info) => console.log(info.event.title, info.event.start, info.event.end)}
          eventBackgroundColor="#1976d2"
          eventBorderColor="#1976d2"
          dayMaxEventRows={true}
          dayMaxEvents={true}
          height="auto"
        />
      </Grid>
      <Grid item xs={12}>
        <EventDetails event={selectedEvent} open={open} handleClose={handleClose} handleDelete={handleDeleteEvent} handleUpdateEvent={handleUpdateEvent} />
      </Grid>

      <Dialog open={newEventDialogOpen} onClose={handleNewEventDialogClose}>
        <DialogTitle>Add New Event</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="dense">
            <InputLabel>Event Title</InputLabel>
            <Select
              value={newEventTitle}
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
            label="Event Start Time"
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
            label="Event End Time"
            type="time"
            fullWidth
            value={newEventEndTime}
            onChange={(e) => setNewEventEndTime(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            margin="dense"
            label="Event Color"
            fullWidth
            value={newEventColor}
            onChange={(e) => setNewEventColor(e.target.value)}
            type="color"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleNewEventDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddNewEvent} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Calendar;
