import React from 'react';

class Goals extends React.Component {
  
  state = {
    user_id: 1,
    goals: [],
    new_goal: ''
  }

  componentDidMount() {
    fetch(`http://localhost:3000/goals`)
    .then(resp=>resp.json())
    .then(goals=>this.setState({goals}))
  }

  addGoal = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/goal`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({title: this.state.new_goal, user_id: this.state.user_id})
    })
    .then(resp=>resp.json())
    .then(goal=>this.setState((prevState) => ({
      goals: [...prevState.goals, goal]
    }))) 
    this.setState({new_goal: ''})
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({new_goal: e.target.value})
  }

  handleDelete = (e, id) => {
    e.preventDefault()
    fetch(`http://localhost:3000/goal/${id}`, {
      method: 'DELETE'})
    let goals = this.state.goals.filter(goal => goal.id !== id)
    this.setState({goals})
  }

  render() {
    let { goals } = this.state
    return (
        <React.Fragment>
          <h1 className="title">Goals</h1>
          <div className="container small">
              <p className='small-description'>Use this space to add your goals for today</p>
              <form> 
                {goals.map(goal => 
                      <div key={goal.id}>
                        <input readOnly type='text'
                          value={goal.title} 
                          className='new-item'/>
                        <button className='add' onClick={e => this.handleDelete(e, goal.id)}> x </button>
                      </div>
                    )  
                  }
                <input type='text' className='new-item' onChange={this.handleChange} value={this.state.new_goal}/> <button className='add' onClick={this.addGoal}> + </button>
              </form>
          </div>
        </React.Fragment>
      );
    }
  }
  
  export default Goals;
  