import React, { Component } from 'react';
import axios from 'axios'

import Calendar from '@atlaskit/calendar';
import Button from '@atlaskit/button';

import './../App.css'

export default class CreateInfo extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeExperience = this.onChangeExperience.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            experience: 0,
            date: new Date(),

            users: []
        };
    };

    componentDidMount() {
        // this.setState({
        //     users: ['test user'],
        //     username: 'test user'
        // });

        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username),
                        username: response.data[0].username
                    });
                }
            });
    };

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    };

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    };

    onChangeExperience(e) {
        this.setState({
            experience: e.target.value
        });
    };

    onChangeDate(date) {
        this.setState({
            date: date
        });
    };

    onSubmit(e) {
        e.preventDefault();

        const info = {
            username: this.state.username,
            description: this.state.description,
            experience: this.state.experience,
            date: this.state.date
        };

        console.log(info);

        axios.post('http://localhost:5000/info/add', info)
            .then(res => console.log(res.data));

        window.location = '/';
    };

    render() {
        return (
            <div style={{ width: '1000px'}}>
                <div className="caption">
                    <h3>Create New <span className="tertiaryCol">Info Log</span></h3>
                </div>

                <form onSubmit={this.onSubmit} className="heads">
                    <div>
                        <label style={{ marginLeft: '10%' }}>Username: </label>

                        <select 
                            ref="userInput"
                            required
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            className="dropDown"
                        >
                            {
                                this.state.users.map(function(user) {
                                    return <option
                                                key={user}
                                                value={user}
                                            >
                                            	{user}
                                            </option>
                                })
                            };
                        </select>

                        <label>Description: </label>

                        <input
                            type="text"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            className="dropDown"
                        />
                    </div>

                    <div style={{ marginTop: '20px', marginLeft: '10%' }}>
                        <label>Experience (in Years): </label>

                        <input
                            type="number"
                            value={this.state.experience}
                            onChange={this.onChangeExperience}
                            className="dropDown"
                            style={{ width: '58%' }}
                        />
                    </div>

                    <div style={{ marginTop: '20px', marginLeft: '10%' }}>
                        <label>Date: </label>

                        <Calendar
                            innerProps={{
                                style: {
                                    display: 'flex'
                                }
                            }}
                            onChange={this.onChangeDate}
                        />
                    </div>

                    <div style={{ padding: '10px', display: 'flex'}}>
                        <div style={{ marginLeft: "auto" }}>
                            <Button
                                appearance="primary"
                                type="submit"
                                value="Create Info Log"
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