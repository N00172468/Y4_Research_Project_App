import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@atlaskit/button/standard-button';
import Drawer from '@atlaskit/drawer';

import EditorLayoutTwoLeftSidebarIcon from '@atlaskit/icon/glyph/editor/layout-two-left-sidebar';
import EditorPanelIcon from '@atlaskit/icon/glyph/editor/panel';
import AddItemIcon from '@atlaskit/icon/glyph/add-item';
import InviteTeamIcon from '@atlaskit/icon/glyph/invite-team';

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
            <div style={{ padding: '10px', display: 'flex'}} className="primaryColBackground">
                <div style={{ marginLeft: "auto" }}>
                    <Drawer
                        onClose={this.onClose}
                        onCloseComplete={this.onCloseComplete}
                        onOpenComplete={this.onOpenComplete}
                        isOpen={this.state.isDrawerOpen}
                        width="wide"
                    >
                        <div>
                            <h5 style={{ fontSize: '20px' }}>Full-Stack React App. Demo</h5>
                        </div>

                        <div>
                            <ul>
                                <li style={{ paddingTop: '30px', fontSize: '20px' }}>
                                    <Link to="/" onClick={this.onClose}>
                                        <EditorPanelIcon />
                                        Info List
                                    </Link>
                                </li>

                                <li style={{ paddingTop: '10px', fontSize: '20px' }}>
                                    <Link to="/create" onClick={this.onClose}>
                                        <AddItemIcon />
                                        Create Info
                                    </Link>
                                </li>

                                <li style={{ paddingTop: '10px', fontSize: '20px' }}>
                                    <Link to="/user" onClick={this.onClose}>
                                        <InviteTeamIcon />
                                        Create User
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Drawer>

                    <Button id="open-drawer" type="button" onClick={this.openDrawer}>
                        <EditorLayoutTwoLeftSidebarIcon />
                    </Button>
                </div>
            </div>
        );
    };
};