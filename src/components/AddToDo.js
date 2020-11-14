import React, { Component } from 'react'
import ArrowRightIcon from '@atlaskit/icon/glyph/arrow-right';
import Button from '@atlaskit/button';

export class AddToDo extends Component {
    state = {
        title: ''
    }

    // Updating state in real-time:
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    // Submit Event:
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                    type="text" 
                    value={this.state.title}
                    onChange={this.onChange}
                    name="title" 
                    placeholder="Add To Do..." 
                    style={{ flex: '10', padding: '5px' }}
                    />

                    {this.props.error
                    && <p>{this.props.error}</p>
                    }

                <Button
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{ flex: '1' }}
                    appearance="primary"
                    iconAfter={<ArrowRightIcon label="Arrow right icon" size="small" />}
                >
                    Add
                </Button>
            </form>
        )
    }
}

export default AddToDo
