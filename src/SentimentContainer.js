import React from 'react';
class JournalEntry extends React.Component {

  render() {  
    
      return (
          <div>
            <h1 className="title">Your sentiment over time</h1>
              <div className="container">
                <p> This is where we will show sentiment over time using Google sentiment API</p>
              </div>
          </div> 
      );
    }
  }
  
  export default JournalEntry;
  