import React from 'react';
import './App.css';
import Home from './components/Home'; 
import NavBar from './components/NavBar';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Footer from './components/Footer';
// import Switch, BrowserRouter as Router, Route from 'react-router-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    {/* <div className="App"> */}
    <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
              <NavBar/><Home/><Footer/>
          </Route>
        </Switch>
      
    {/* </div> */}
    </Router>
  );
}

export default App;
