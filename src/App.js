import './App.css';
import Navbar from './Navbar';
import React, { Component } from 'react';
import BlogList from './display';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import Contests from './contest';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
      </div>
      <Switch>
        <Route path = "/display/:handle">
          <BlogList/>
          </Route>
        <Route path = "/contest/:handle">
          <Contests />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
