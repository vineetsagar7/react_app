import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard';
import CelebrityJokes from './components/CelebrityJokes';
import FoodJokes from './components/FoodJokes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Dashboard />
          {/* <Router>
            <div>
              <Route path="/" component={FoodJokes} />
              <Route path="/special" component={CelebrityJokes} />
            </div>
          </Router > */}
        </p>
      </div>
    );
  }
}

export default App;
