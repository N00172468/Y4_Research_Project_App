import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

// import './App.css';

class ToDo extends Component {
    render() {
    console.log("Props", this.props.toDoList) // Show the prop array:

    // return (
    //   <div>
    //     <h1>To Do Component</h1>
    //   </div>
    // )

    // map() = High-order array method. Can return an array from an array. Used for many things. Here it's used for looping. When mapping through something, it creates a list.
    return this.props.toDoList.map((todo) => (
        // <h3>{ todo.title }</h3>

        <ToDoItem 
            key={todo.id} 
            todo={ todo } 
            markComplete={this.props.markComplete}
            deleteToDo={this.props.deleteToDo} /> // REMEMBER: todo={} is a prop! When mapping, it will look for a key. 
    ));
    }
}

/**
 * PropTypes is a library that helps in minimizing this problem in React by 
 * checking the types passed in the props object against a specification we 
 * set beforehand and to raise a warning if the types passed don't match the types expected.
 */
ToDo.propTypes = {
    toDoList: PropTypes.array.isRequired
}

export default ToDo;