import React from 'react';

class JournalEntry extends React.Component {
  
  state = {
    entry: ''
  }

  handleSubmit = () => {}

  handleChange = () => {}

  render() {  
    return (
        <div>
          <h1 className="title">Journal Title</h1>
          <div className="container">
              {/* <form onSubmit={this.handleSubmit}> 
                <input type="text-area" name="entry" value={this.state.entry} onChange={this.handleChange} />
                <input type="submit">Submit</input>
              </form> */}
          </div>
        </div> 
      );
    }
  }
  
  export default JournalEntry;
  