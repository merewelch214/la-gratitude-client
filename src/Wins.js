import React from 'react';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

class DashboardContainer extends React.Component {
  
  state = {
    user_id: 1,
    wins: [],
    new_win: ''
  }

  componentDidMount() {
    fetch(`http://localhost:3000/wins`)
    .then(resp=>resp.json())
    .then(wins=>this.setState({wins}))
  }

  addWin = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/win`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({title: this.state.new_win, user_id: this.state.user_id})
    })
    .then(resp=>resp.json())
    .then(win=>this.setState((prevState) => ({
      wins: [...prevState.wins, win]
    }))) 
    this.setState({new_win: ''})
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({new_win: e.target.value})
  }

  handleDelete = (e, id) => {
    e.preventDefault()
    fetch(`http://localhost:3000/win/${id}`, {
      method: 'DELETE'})
    let wins = this.state.wins.filter(win => win.id !== id)
    this.setState({wins})
  }
  
  render() {
    let { wins } = this.state
    return (
      <React.Fragment>
        <h1 className="title">Wins</h1>
        <div className="container small">
            <p className='small-description'>Use this space to share your wins from yesterday</p>
            <form> 
                {this.state.wins && wins.map(win => 
                      <div key={win.id}>
                        <input readOnly type='text'
                          value={win.title} 
                          className='new-item'/>
                        <button className='add' onClick={e => this.handleDelete(e, win.id)}><FaMinusCircle/></button>
                      </div>
                    )  
                  }
                <input type='text' className='new-item' onChange={this.handleChange} value={this.state.new_win}/> <button className='add' onClick={this.addWin}><FaPlusCircle/></button>
              </form>
        </div>
      </React.Fragment>
    );
  }
}
  
export default DashboardContainer;
  