import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@atlaskit/button/standard-button';
import Drawer from '@atlaskit/drawer';

export default class Navbar extends Component {
    state = {
        isDrawerOpen: false
    };

    openDrawer = () =>
        this.setState({
            isDrawerOpen: true
        });

    onClose = () => {
        console.log('onClose');
        this.setState({
            isDrawerOpen: false,
        });
    };

    onCloseComplete = () =>
        console.log('onCloseComplete');

    onOpenComplete = () =>
        console.log('onOpenComplete');

    render() {
        return (
            <div css={{ padding: '2rem' }}>
            <Drawer
                onClose={this.onClose}
                onCloseComplete={this.onCloseComplete}
                onOpenComplete={this.onOpenComplete}
                isOpen={this.state.isDrawerOpen}
                width="wide"
            >
                <div>
                    <p>Nav Sidebar Menu</p>
                </div>

                <div>
                    <ul>
                        {/* <li>
                            <Link to="/" onClick={this.onClose}>Med. App</Link>
                        </li> */}

                        <li>
                            <Link to="/" onClick={this.onClose}>Info List</Link>
                        </li>

                        <li>
                            <Link to="/create" onClick={this.onClose}>Create Info</Link>
                        </li>

                        <li>
                            <Link to="/user" onClick={this.onClose}>Create User</Link>
                        </li>
                    </ul>
                </div>
                
            </Drawer>

            <Button id="open-drawer" type="button" onClick={this.openDrawer}>
                Open Drawer
            </Button>
            </div>
        );
    };
};