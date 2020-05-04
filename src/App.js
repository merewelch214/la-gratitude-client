import React from 'react';
import './App.css';
import MainContainer from './MainContainer'
import { withRouter, Switch, Route } from "react-router-dom";
import SignUp from './SignUp'
import Login from './Login'
import Header from './Header'

class App extends React.Component {
  
  state = {
    currentUser: '',
    currentView: 'journal'
  }

  showJournal = () => {
    this.setState({
      currentView: 'journal'
    })
  }

  showDashboard = () => {
    this.setState({
      currentView: 'dashboard'
    })
  }
  
  showSettings = () => {
    this.setState({
      currentView: 'settings'
    })
  }

  render() {
    return (
        <div className="App">
          <div className='main-container'>
          < Header  showDashboard={this.showDashboard} showJournal={this.showJournal} />
          <Switch>
              <Route path='/signup' render={() => <SignUp />}/>
              <Route path='/login' render={() => <Login />}/>
              <Route path='/journal' render={() => <MainContainer currentView={this.state.currentView} />} />
              <Route path='/dashboard' render= {() => <MainContainer currentView={this.state.currentView} />} />
              <Route path='/' render={() =>  <MainContainer currentView={this.state.currentView} />} />  
            </Switch >
          </div>
        </div>
    );
  }
}

export default withRouter(App);
