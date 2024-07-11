import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { EventInput, EventClickArg } from '@fullcalendar/core';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField, Grid } from '@mui/material';
import { Event, LocationOn } from '@mui/icons-material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import DescriptionIcon from '@mui/icons-material/Description';

interface EventDetailsProps {
  event: EventClickArg | null;
  open: boolean;
  handleClose: () => void;
  handleDelete: () => void;
  handleUpdateTitle: (newTitle: string) => void; // New prop for update title functionality
}

const EventDetails: React.FC<EventDetailsProps> = ({ event, open, handleClose, handleDelete, handleUpdateTitle }) => {
  const [editedTitle, setEditedTitle] = useState<string>(event?.event.title || '');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(e.target.value);
  };

  const handleSave = () => {
    handleUpdateTitle(editedTitle);
    handleClose();
  };

  const handleDeleteClick = () => {
    handleDelete();
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Event /> 
        <TextField
          autoFocus
          margin="dense"
          label="Event Title"
          fullWidth
          value={editedTitle}
          onChange={handleTitleChange}
        />
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <AccessAlarmIcon sx={{ pr: 1 }} />
          <strong>Start:</strong> {event?.event.start?.toLocaleString()}
        </DialogContentText>
        <DialogContentText sx={{ pt: 1 }}>
          <LocationOn sx={{ pr: 1 }} />
          <strong>Location:</strong> {event?.event.extendedProps?.location || 'No location specified.'}
        </DialogContentText>
        <DialogContentText sx={{ pt: 1 }}>
          <DescriptionIcon sx={{ pr: 1 }} />
          <strong>Description:</strong> {event?.event.extendedProps?.description || 'No description provided.'}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDeleteClick} color="error">
          Delete
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
        <Button onClick={handleClose} color="primary">
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
    { id: '1', title: 'Event 1', start: '2024-07-01', extendedProps: { description: 'Description for Event 1', location: 'Location 1' } },
    { id: '2', title: 'Event 2', start: '2024-07-02', extendedProps: { description: 'Description for Event 2', location: 'Location 2' } },
  ]);
  const [newEventDialogOpen, setNewEventDialogOpen] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventDate, setNewEventDate] = useState('');

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
  };

  const handleAddNewEvent = () => {
    if (newEventTitle.trim()) {
      const newEvent: EventInput = {
        id: String(events.length + 1), // Assign unique ID
        title: newEventTitle,
        start: newEventDate,
      };
      setEvents([...events, newEvent]);
      setNewEventDialogOpen(false);
      setNewEventTitle('');
    }
  };

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      const updatedEvents = events.filter((event) => event.id !== selectedEvent.event.id);
      setEvents(updatedEvents);
      setOpen(false);
    }
  };

  const handleUpdateEventTitle = (newTitle: string) => {
    if (selectedEvent) {
      const updatedEvents = events.map((event) => {
        if (event.id === selectedEvent.event.id) {
          return {
            ...event,
            title: newTitle,
          };
        }
        return event;
      });
      setEvents(updatedEvents);
    }
  };

  return (
    <Grid container spacing={3} sx={{ width: '100%' }} className='pt-10 pl-10'>
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
        />
      </Grid>
      <Grid item xs={12}>
        <EventDetails event={selectedEvent} open={open} handleClose={handleClose} handleDelete={handleDeleteEvent} handleUpdateTitle={handleUpdateEventTitle} />
      </Grid>

      <Dialog open={newEventDialogOpen} onClose={handleNewEventDialogClose}>
        <DialogTitle>Add New Event</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Event Title"
            fullWidth
            value={newEventTitle}
            onChange={(e) => setNewEventTitle(e.target.value)}
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
