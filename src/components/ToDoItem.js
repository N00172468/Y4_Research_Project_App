import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Checkbox } from '@atlaskit/checkbox';
import Button from '@atlaskit/button';

export class ToDoItem extends Component {
    // Turning a style into a function:
    getStyle = () => {
        // Long Way:
        // if(this.props.todo.completed) {
        //     return {
        //         textDecoration: 'line-through'
        //     }
        // } else {
        //     return {
        //         textDecoration: 'none'
        //     }
        // }

        // Short Way:
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            
            background: '#eee',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
    }

    render() {
        // Destructuring (helpful to shorten down like <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} />):
        const { id, title } = this.props.todo; // Setting the props beforehand to make it easier to be used

        return (
            // JSX Inline Styling
            // <div style={{ backgroundColor: '#234714' }}> 
            // <div style={itemStyle}> 
            <div style={this.getStyle()}> 
                {/* <p>To Do Item Component</p> */}
                <p>
                    {/* bind() is needed to allow event handler to find the id */}
                    {/* <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} /> {''}  */}
                    {/* { this.props.todo.title } */}
                    <Checkbox 
                        onChange={this.props.markComplete.bind(this, id)}
                        value="default checkbox"
                        label={ title }
                        name="checkbox-default"
                        testId="cb-default"
                    /> 

                    <Button 
                        onClick={this.props.deleteToDo.bind(this, id)} 
                        style={btnStyle}
                        className="btn"
                        appearance="danger"
                        spacing="compact"
                    >
                            x
                    </Button>
                </p>
            </div>
        )
    }
}

/**
 * PropTypes is a library that helps in minimizing this problem in React by 
 * checking the types passed in the props object against a specification we 
 * set beforehand and to raise a warning if the types passed don't match the types expected.
 */
ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

// Instead of Inline Styling:
// const itemStyle = {
//     backgroundColor: '#662924'
// }

const btnStyle = {
    // background: '#ff0000',
    // color: '#fff',
    // border: 'none',
    // padding: '5px 9px',
    // borderRadius: '50%',
    // cursor: 'pointer',
    float: 'right'
}

export default ToDoItem
