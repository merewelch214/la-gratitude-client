import React from 'react';
import moment from 'moment';
class JournalEntry extends React.Component {
  
  state = {
    entry: '',
    user_id: 1
  }

  // save journal entry to user data and reset the form. Once saved, should redirect to dashboard.
  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/journal_entry`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })

    this.setState({ entry: '' })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  clear = () => {
    this.setState({
      entry: ''
    })
  }

  // To Do: add function to randomly show inspirational quote in empty textarea.


  render() {  
    
    const today = new Date();
    
    return (
        <div>
          <h1 className="title">{`${moment(today).format('ll')} Journal`}</h1>
          <div className="container">
              <form onSubmit={this.handleSubmit} id='entry-form'>
                <label name='entry'/>
                <textarea id='entry-input' name='entry' value={this.state.entry} onChange={this.handleChange} placeholder="What are your wildest dreams?"/><br />
                <button type="submit" value="Submit">Save</button>
                <button type="reset" onClick={this.clear}>Clear</button>
              </form>
          </div>
        </div> 
      );
    }
  }
  
  export default JournalEntry;
  