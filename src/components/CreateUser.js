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
            <div style={{ width: '1000px'}}>
                <div className="caption">
                    <h3>Create New <span className="tertiaryCol">User</span></h3>
                </div>

                <form onSubmit={this.onSubmit} className="heads">
                    <div>
                        <label style={{ marginLeft: '10%' }}>Username: </label>

                        <input 
                            type="text"
                            required
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            className="dropDown"
                            style={{ width: '60%' }}
                        />
                    </div>

                    <div style={{ padding: '10px', display: 'flex'}}>
                        <div style={{ marginLeft: "auto" }}>
                            <Button
                                appearance="primary"
                                type="submit"
                                value="Create User"
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        );
    };
};