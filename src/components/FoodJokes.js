import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { getFoodData } from '../utils/fetch';
import { isLoggedIn } from '../utils/AuthService';

class FoodJokes extends Component {

    constructor() {
        super()
        this.state = { jokes: [] };
    }

    getFoodJokes() {
        getFoodData().then((jokes) => {
            this.setState({ jokes });
        });
    }

    componentDidMount() {
        this.getFoodJokes();
    }

    render() {

        const { jokes } = this.state;

        return (
            <div>
                <Nav />
                <h3 className="text-center">Chuck Norris Food Jokes</h3>
                <hr />
                <div className="col-sm-12">
                    {isLoggedIn() ?
                        <div className="jumbotron text-center">
                            <h2>View Celebrity Jokes</h2>
                            <Link className="btn btn-lg btn-success" to='/special'> Celebrity Jokes </Link>
                        </div> : <div className="jumbotron text-center"><h2>Get Access to Celebrity Jokes By Logging In</h2></div>
                    }
                </div>
            </div>
        );
    }
}

export default FoodJokes;