import React, { Component } from 'react';

class User extends Component {

    render() {

        function formatName(user) {
            return user.firstName + ' ' + user.lastName;
        }

        const user = {
            firstName: 'Vineet',
            lastName: 'Sagar'
        }

        const account = (<h3>{formatName(user)} </h3>);

        return (
            <div>
                User
                {account}
            </div>
        );
    }
}

export default User;
