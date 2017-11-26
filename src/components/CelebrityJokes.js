import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { getCelebrityData } from '../utils/fetch';

class CelebrityJokes extends Component {

  constructor() {
    super();
    this.state = { jokes: [] };
  }

  getCelebrityJokes() {
    getCelebrityData().then((jokes) => {
      this.setState({ jokes });
    });
  }

  componentDidMount() {
    this.getCelebrityJokes();
  }

  render() {
    const { jokes } = this.state;

    return (
      <div>
        <Nav />
        <h3 className="text-center">Privileged Chuck Norris Celebrity Jokes</h3>
        <hr />
      </div>
    )
  }
}

export default CelebrityJokes;