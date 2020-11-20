import React from 'react';

function App() {
  return (
    <div className="App">
      Hello World
    </div>
  )
}

export default App;



// import React, { Component } from 'react';
// import ToDo from './components/ToDo';
// import Header from './components/layout/Header';
// import AddToDo from './components/AddToDo';

// import './App.css';

// class App extends Component {
//   state = {
//     toDoList: [
//       {
//         id: 1,
//         title: 'To Do List 1!',
//         completed: false
//       },
//       {
//         id: 2,
//         title: 'To Do List 2!',
//         completed: false
//       },
//       {
//         id: 3,
//         title: 'To Do List 3!!!',
//         completed: false
//       }
//     ],
//     error: null
//   }

//   // Event Handling (start from ToDoItem then to ToDo then to this component to see full step. Includes "Destructuring"):
//   markComplete = (id) => {
//     // console.log(id);
//     this.setState({ toDoList: this.state.toDoList.map(todo => {
//         if(todo.id === id) {
//           todo.completed = !todo.completed // Toggle state when checkbox is clicked.
//         }
//         return todo;
//       }) 
//     })
//   }

//   // Delete Event is done by filtering through the state.
//   deleteToDo = (id) => {
//     // console.log(id);
//     this.setState({ toDoList: [...this.state.toDoList.filter(todo => todo.id !== id)] })
//   }

//   // Add Event
//   addToDo = (title) => {
//     if(title === "") return this.setState({error: 'ToDo cannot be empty'})
//     let { toDoList } = this.state
    
//     // if last id, increment id.
//     // console.log(toDoList.length, 'Testing Increment')
//     const obj = {
//       id: toDoList.length + 1,
//       title: title,
//       completed: false
//     }
//     toDoList.push(obj)
//     this.setState({toDoList, error: null})
//   }
  
//   render() {
//     return (
//       <div className="App">
//         <div className="container">
//           {/* <h1>Oh Hi</h1> */}

//           {/* Header Function-Based Component */}
//           <Header />
//           <AddToDo error={this.state.error} addToDo={ (p) => this.addToDo(p) } />

//           {/* Passing the "toDoList" state as a prop */}
//           {/* markComplete is also a prop in ToDoItem component which is used for Event Handling. */}
//           <ToDo 
//             toDoList={this.state.toDoList} 
//             markComplete={this.markComplete}
//             deleteToDo={this.deleteToDo} 
//           /> 
//         </div>
//       </div>
//     )
//   }
// }

// export default App;


