import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './user/pages/Users'
import UserDetails from './user/components/UserDetails'
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces'

const App = () =>{
  
  return(
    <Router>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Users/>
        </Route>
        
        <Redirect to="/" path="/"/>
      </Switch>
    </Router>
  )
}
export default App;
