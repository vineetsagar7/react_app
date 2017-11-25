import React, { Component } from 'react';
import { Route } from 'react-router';
import '../App.css';

class Nav extends Component {

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <Route className="navbar-brand" to="/">Chuck Norris World</Route>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <Route to="/">Food Jokes</Route>
                    </li>
                    <li>
                        <Route to="/special">Celebrity Jokes</Route>
                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><button className="btn btn-info log">Log In</button></li>
                    <li><button className="btn btn-danger log">Log out </button></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;