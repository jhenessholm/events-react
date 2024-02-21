import React, { useState, useEffect } from 'react';
import RegistrationForm from './RegistrationForm';
import Modal from 'react-modal';

const EventList = ({ onDelete, onRegister }) => {
 const [events, setEvents] = useState([]);
 const [registrationEventId, setRegistrationEventId] = useState(null);
 const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

 const handleRegistration = (eventId) => {
 setRegistrationEventId(eventId);
 openRegistrationModal();
 };

 const openRegistrationModal = () => {
 setIsRegistrationModalOpen(true);
 };

 const closeRegistrationModal = () => {
 setRegistrationEventId(null);
 setIsRegistrationModalOpen(false);
 };

 const modalStyles = {
 content: {
 width: '45%',
 margin: 'auto',
 },
 };

 useEffect(() => {
 // Fetch events from local storage
 const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
 setEvents(storedEvents);
 }, []); // Empty dependency array to fetch data only once on component mount

 const handleDelete = (eventId) => {
 // Filter out the event to be deleted
 const updatedEvents = events.filter(event => event.id !== eventId);
 // Update state to remove the event from the list
 setEvents(updatedEvents);
 // Update local storage to reflect the deletion
 localStorage.setItem('events', JSON.stringify(updatedEvents));
 // Invoke the onDelete callback if provided
 onDelete && onDelete(eventId);
 };

 return (
 <div className='events'>
 <h2>Event List</h2>
 <ul>
 {events.map((event) => (
 <li key={event.id}>
 <div className='listCont'>
 {event.photo && (
 <img src={event.photo} alt="Event" className="photo" />
 )}
 <p>{event.title}</p>
 <p>{event.date}</p>
 <button className='register' onClick={() => handleRegistration(event.id)}>
 Register
 </button>
 <button className='delete' onClick={() => handleDelete(event.id)}>
 Delete
 </button>
 </div>
 {registrationEventId === event.id && (
 <Modal
 isOpen={isRegistrationModalOpen}
 onRequestClose={closeRegistrationModal}
 contentLabel='Registration Modal'
 style={modalStyles}
 >
  
 <RegistrationForm eventId={registrationEventId} onRegister={onRegister} />
 <button className='button' onClick={closeRegistrationModal}>
 Close
 </button>
 </Modal>
 )}
 </li>
 ))}
 </ul>
 </div>
 );
};
export default EventList;