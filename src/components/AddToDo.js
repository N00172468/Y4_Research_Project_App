import React, { Component } from 'react'

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
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{ flex: '1' }}
                />
            </form>
        )
    }
}

export default AddToDo
