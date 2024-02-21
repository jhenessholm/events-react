import React, { useState } from 'react';
import Trends from './Trends';
import EventList from './EventList';
import News from './News';
import './App.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Trending');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tab-bar">
        <div
          className={`tab ${activeTab === 'Trending' ? 'active' : ''}`}
          onClick={() => handleTabClick('Trending')}
        >
          Trending
        </div>
        <div
          className={`tab ${activeTab === 'Events' ? 'active' : ''}`}
          onClick={() => handleTabClick('Events')}
        >
          Events
        </div>
        <div
          className={`tab ${activeTab === 'News' ? 'active' : ''}`}
          onClick={() => handleTabClick('News')}
        >
          News
        </div>
      </div>

      <div className="tab-content">
        {activeTab === 'Trending' && <Trends />}
        {activeTab === 'Events' && <EventList />}
        {activeTab === 'News' && <News />}
      </div>
    </div>
  );
};

export default Tabs;
