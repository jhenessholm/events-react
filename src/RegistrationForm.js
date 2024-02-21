import React, { useState } from 'react';

const RegistrationForm = ({ eventId, onRegister, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      // Instead of calling onRegister, show an alert and close the modal
      alert(`Registration successful for Event ID: ${eventId}`);
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
