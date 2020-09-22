import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import DestinationDetails from './components/DestinationDetails/DestinationDetails';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Booking from './components/Booking/Booking';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value =  {[loggedInUser, setLoggedInUser]}>

      <p>Name: {loggedInUser.name}</p>
     
    <Router>
      <Switch>
        <Route path="/home">
        <Header/>
          <Home />
        </Route>
        <Route path="/login">
          <Header/>
          <Login></Login>
        </Route>
        <Route path="/destination/:bookingId">
          <Header/>
          <DestinationDetails />
        </Route>
        <Route path="/booking">
          <Header/>
          <Booking></Booking>
        </Route>
        <Route exact path="/">
        <Header/>
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
