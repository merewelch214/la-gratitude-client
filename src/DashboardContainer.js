import React from 'react';
import UserSnapshot from './UserSnapshot'
import JournalCalendar from './JournalCalendar'
import SentimentContainer from './SentimentContainer'

function DashboardContainer() {
    return (
      <div className="journal">
          <div className="left-side">
            <UserSnapshot />
            <JournalCalendar />
          </div>
          <div className="right-side">
            <SentimentContainer />
          </div>
      </div>
    );
  }
  
  export default DashboardContainer;
  