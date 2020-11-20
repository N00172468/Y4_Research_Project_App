import React, { Component } from 'react';
import axios from 'axios'

import Button from '@atlaskit/button';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: ''
        };
    };

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    };

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username
        };

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        this.setState({
            username: ''
        });
    };

    render() {
        return (
            <div>
                {/* <p>You are on the Create User Component!</p> */}

                <h3>Create New User</h3>

                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Username: </label>

                        <input 
                            type="text"
                            required
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>

                    <div>
                        <Button
                            appearance="primary"
                            type="submit"
                            value="Create User"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        );
    };
};