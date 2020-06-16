import React from 'react';
import UserSnapshot from './UserSnapshot'
import JournalCalendar from './JournalCalendar'
import BlurbsContainer from './BlurbsContainer'
// import SentimentContainer from './SentimentContainer'

function DashboardContainer() {
    return (
      <div className="journal">
          <div className="left-side">
            <UserSnapshot />
            <JournalCalendar />
          </div>
          <div className="right-side">
            < BlurbsContainer />
            {/* <SentimentContainer /> */}
          </div>
      </div>
    );
  }
  
  export default DashboardContainer;
  