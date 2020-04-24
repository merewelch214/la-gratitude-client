import React from 'react';
import Mood from './Mood.js';
import Goals from './Goals.js';
import Wins from './Wins.js';

function JournalContainer() {
    return (
      <div className="journal">
          < Mood />
          < Wins />
          < Goals />
      </div>
    );
  }
  
  export default JournalContainer;
  