import React from 'react';
import UserSnapshot from './UserSnapshot'
import Calendar from './Calendar'
import SentimentContainer from './SentimentContainer'

function DashboardContainer() {
    return (
      <div className="dashboard">
          <div className="left-side">
            <UserSnapshot />
            <Calendar />
          </div>
          <div className="right-side">
            <SentimentContainer />
          </div>
      </div>
    );
  }
  
  export default DashboardContainer;
  