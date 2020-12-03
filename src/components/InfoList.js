import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './../App.css'

const Info = props => (
    <tr>
        <td>{props.info.username}</td>
        <td>{props.info.description}</td>
        <td>{props.info.experience}</td>
        <td>{props.info.date.substring(0,10)}</td>
        <td>
            <Link to={"/edit/" + props.info._id}>Edit</Link> 
            | 
            <a href="#" onClick={() => { props.deleteInfo(props.info._id) }}>Delete</a>
        </td>
    </tr>
);

export default class InfoList extends Component {
    constructor(props) {
        super(props);

        this.deleteInfo = this.deleteInfo.bind(this);

        this.state = {
            info: []
        };
    };

    componentDidMount() {
        axios.get('http://localhost:5000/info/')
            .then(response => {
                this.setState({ info: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    };

    deleteInfo(id) {
        axios.delete('http://localhost:5000/info/' + id)
            .then(res => console.log(res.data)
        );
        
        this.setState({
            info: this.state.info.filter(el => el._id !== id)
        });
    };

    infoList() {
        return this.state.info.map(currentInfo => {
            return <Info info={currentInfo} deleteInfo={this.deleteInfo} key={currentInfo._id}/>;
        })
    };

    render() {
        return (
            <div style={{ width: '1000px'}}>
                <h3 className="caption">Logged <span className="tertiaryCol">Info</span></h3>

                <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <table>
                        <thead className="heads">
                            <tr>
                                <th>Username</th>
                                <th>Description</th>
                                <th>Experience</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody style={{ textAlign: 'center', fontFamily: 'Open Sans' }}>
                            { this.infoList() }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };
};