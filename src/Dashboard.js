import React, { useState } from 'react';
import Settings from './Settings';
import Tabs from './Tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const Dashboard = () => {
  const [redirectToSettings, setRedirectToSettings] = useState(false);

  const handleTitleClick = () => {
    // Manually redirect to the desired route (in this case, '/')
    window.location.href = '/';
  };

  return (
    <div>
      <div className='title'>
        <button className='titleName' onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
          <h1>Community Dashboard</h1>
        </button>
        <button className='settings' onClick={() => setRedirectToSettings(true)}>
          <FontAwesomeIcon icon={faCogs} />
        </button>
      </div>
      {redirectToSettings ? (
          // Render Settings component
          <Settings />
        ) : (
          // Render Tabs component
          <Tabs />
        )}
    </div>
  );
};

export default Dashboard;
