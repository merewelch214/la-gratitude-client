import React from 'react';
import './App.css';
import MainContainer from './MainContainer'
import { withRouter, Switch, Route } from "react-router-dom";
import SignUp from './SignUp'
import Login from './Login'

class App extends React.Component {
  
  state = {
    currentView: 'journal'
  }

  render() {
    return (
        <div className="App">
          <Switch>
              <Route path='/signup' render={() => <SignUp />}/>
              <Route path='/login' render={() => <Login />}/>
              <Route path='/journal' render={() => <MainContainer currentView={this.state.currentView} />} />
              <Route path='/dashboard' render= {() => <MainContainer currentView={this.state.currentView} />} />
              <Route path='/' render={() =>  <MainContainer currentView={this.state.currentView} />} />  
            </Switch >
        </div>
    );
  }
}

export default withRouter(App);
