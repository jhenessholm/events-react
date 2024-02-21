import React, { useState } from 'react';
import './App.css';

const AddEventForm = () => {
  const [newEvent, setNewEvent] = useState({ title: '', date: '', photo: null });

  const handleInputChange = (e) => {
    const { name, type } = e.target;

    // If the input is a file input, handle it separately
    if (type === 'file') {
      const photoFile = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        const dataURL = event.target.result;
        setNewEvent({ ...newEvent, [name]: dataURL });
      };

      reader.readAsDataURL(photoFile);
    } else {
      setNewEvent({ ...newEvent, [name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation
    if (newEvent.title && newEvent.date) {
      const eventWithId = { ...newEvent, id: Date.now() };
      // Handle the event addition logic here or remove it if not needed
      console.log('Added event:', eventWithId);
      setNewEvent({ title: '', date: '', photo: null });

      // Get existing events from local storage
      const existingEvents = JSON.parse(localStorage.getItem('events')) || [];

      // Add the new event to the existing events
      const updatedEvents = [...existingEvents, eventWithId];

      // Store the updated events in local storage
      localStorage.setItem('events', JSON.stringify(updatedEvents));
    }
  };

  return (
    <div>
      <h2>Add New Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={newEvent.title} onChange={handleInputChange} />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={newEvent.date} onChange={handleInputChange} />
        </label>
        <label>
          Photo:
          <input type="file" name="photo" accept="image/*" onChange={handleInputChange} />
        </label>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default AddEventForm;
