import React from 'react';

class JournalEntry extends React.Component {
  
  state = {
    entry: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    
    // fetch(`http://localhost:3000/journal_entry`, {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(this.state)
    // })

    this.setState({ entry: '' })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  render() {  
    
    const today = new Date();
    
    return (
        <div>
          <h1 className="title">{`${today} Journal`}</h1>
          <div className="container">
              <form onSubmit={this.handleSubmit}>
                <label name='entry'/>
                <textarea id='entry-input' name='entry' value={this.state.entry} onChange={this.handleChange} placeholder="What are your wildest dreams?"/><br />
                <button type="submit" value="Submit">Submit</button>
                <button type="reset">Clear</button>
              </form>
          </div>
        </div> 
      );
    }
  }
  
  export default JournalEntry;
  