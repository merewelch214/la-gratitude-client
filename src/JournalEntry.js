import React from 'react';
import moment from 'moment';
class JournalEntry extends React.Component {
  
  state = {
    entry: '',
    user_id: 1,
    edit_toggle: false,
    id: '',
    saved: false
  }

  // componentDidMount: return today's journal entry if it exists. if not, return an empty string and show the form. 
  componentDidMount() {
    fetch(`http://localhost:3000/today_journal_entry`)
    .then(resp => resp.json())
    .then(data =>  
      this.setState({ 
        entry: data.entry,
        id: data.id
      })  
    )
  }

  //TO DO:
  // allow edits to today's posts after submission only.
  // if looking at a past day's journal, do not allow an edit, just show the results.
  // need to send the date as a parameter to the fetch request.

  // save journal entry to user data
  // TO DO: Once saved, should redirect to dashboard.
  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/journal_entry`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({user_id: this.state.user_id, entry: this.state.entry})
    })
    .then(resp=> resp.json())
    .then(data=> this.setState({
      id: data.id,
      saved: true
    }))
  }

  // controlled form: setting the state with new values from the form
  handleChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value, 
      saved: false})
  }

  // clear button will clear prior info in the form
  clear = () => {
    this.setState({
      entry: ''
    })
  }

  // show the edit form
  editPost = () => {
    this.setState({editToggle: true, saved: false})
  }

  // send a patch request to update the entry data on the backend.
  handleEdit = () => {
    fetch(`http://localhost:3000/journal_entry/${this.state.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({entry: this.state.entry})
    })
    this.setState({editToggle: false, saved: true})
  }

  // delete fetch request. reset state.
  deletePost = () => {
    fetch(`http://localhost:3000/journal_entry/${this.state.id}`, {
      method: 'DELETE'
    })
    
    this.setState({
      entry: '',
      id: ''
    })
}

  // To Do: add function to randomly show inspirational quote in empty textarea.

  render() {  
    
    const today = new Date();

    // const entryForm = 
    //   <form onSubmit={this.handleSubmit} id='entry-form'>
    //     <label name='entry'/>
    //     <textarea id='entry-input' name='entry' value={this.state.entry} onChange={this.handleChange} placeholder="What are your wildest dreams?"/><br />
    //     <button type="submit" value="Submit">Save</button>
    //     <button type="reset" onClick={this.clear}>Clear</button> 
    //   </form>

    const showEntry =
      <div>
        <p> {this.state.entry} </p>
        <button type='edit' value='edit' onClick={this.editPost}> Edit </button> 
        <button type='delete' value='delete' onClick={this.deletePost}> Delete </button> 
      </div>

    const editForm = 
      <form onSubmit={this.handleEdit} id='entry-form'>
        <label name='entry'/>
        <textarea id='entry-input' name='entry' value={this.state.entry} onChange={this.handleChange} placeholder="What are your wildest dreams?"/><br />
        <button type="submit" value="Submit">Save</button>
        <button type="reset" onClick={this.clear}>Clear</button> 
      </form>

      return (
          <div>
            <h1 className="title">{`${moment(today).format('ll')} Journal`}</h1>
            <div className="container">
                {this.state.edit_toggle === true ? editForm : 
                this.state.saved ? showEntry :
                editForm } 
            </div>
          </div> 
      );
    }
  }
  
  export default JournalEntry;
  