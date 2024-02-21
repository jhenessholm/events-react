import React, { useState } from 'react';
import AddEventForm from './AddEventForm';
import './App.css';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('events');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='sidebar'>
      {/* Sidebar */}
      <div className='side'>
        <ul>
          <li
            className={activeTab === 'events' ? 'active' : ''}
            onClick={() => handleTabClick('events')}
          >
            Events
          </li>
          <li
            className={activeTab === 'news' ? 'active' : ''}
            onClick={() => handleTabClick('news')}
          >
            News
          </li>
          <li
            className={activeTab === 'logout' ? 'active' : ''}
            onClick={() => handleTabClick('logout')}
          >
            Log Out
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className='main'>
        {activeTab === 'events' && <AddEventForm />}
        {activeTab === 'news' && <p>Content for News Tab</p>}
        {activeTab === 'logout' && <p>Content for Log Out Tab</p>}
      </div>
    </div>
  );
};

export default Settings;
