import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard';
import CelebrityJokes from './components/CelebrityJokes';
import FoodJokes from './components/FoodJokes';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { requireAuth } from './utils/AuthService'
import Callback from './components/callback';

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">CelebrityJokes</Link></li>
        <li><Link to="/FoodJokes">FoodJokes</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
      <hr />

      <Route exact path="/" component={CelebrityJokes} />
      <Route path="/FoodJokes" component={FoodJokes} />
      <Route path="/topics" component={Topics} />
      <Route path="/callback" component={Callback} />
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )} />
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default App