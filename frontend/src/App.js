import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './user/pages/Users'
import UserDetails from './user/components/UserDetails'
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces'
import AddUsers from './user/pages/AddUsers'
import EditUsers from "./user/pages/EditUsers";
import DeleteUser from './user/pages/DeleteUser'

const App = (props) =>{


  return(
    <Router>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Users/>
        </Route>
          <Route path="/add" exact>
              <AddUsers/>
          </Route>
          <Route path="/edit/:id" component={EditUsers}>

                {/*<EditUsers name={props.name}/>*/}
          </Route>
          <Route path="/delete/:id" component={DeleteUser}>

                {/*<EditUsers name={props.name}/>*/}
          </Route>
        <Redirect to="/" path="/"/>
      </Switch>
    </Router>
  )
}
export default App;
