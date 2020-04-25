import React from 'react';
import Mood from './Mood.js';
import Goals from './Goals.js';
import Wins from './Wins.js';
import JournalEntry from './JournalEntry.js';

function JournalContainer() {
    return (
      <div className="journal">
            <div className="left-side">
                < Mood />
                < Wins />
                < Goals />
            </div>
            <div className="right-side">
                < JournalEntry />
            </div>
      </div>
    );
  }
  
  export default JournalContainer;
  