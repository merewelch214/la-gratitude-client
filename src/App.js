import React from 'react';
import './App.css';
import MainContainer from './MainContainer'
import { withRouter, Switch, Route } from "react-router-dom";
import SignUp from './SignUp'
import Login from './Login'

function App() {
  return (
      <div className="App">
        <Switch>
            <Route path='/signup' render={() => <SignUp />}/>
            <Route path='/login' render={() => <Login />}/>
            <Route path='/journal' render={() => <MainContainer />}/>
            <Route path='/dashboard' render= {() => <MainContainer />}/>
            <Route path='/' render={() =>  <MainContainer />}/>  
          </Switch >
      </div>
  );
}

export default withRouter(App);
