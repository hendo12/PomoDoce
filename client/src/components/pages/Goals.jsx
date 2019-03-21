import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";
import NewTodoForm from '../NewTodoForm';
import TodoList from '../TodoList';

export default class Goals extends Component {

  // componentDidMount(){

  //   console.log('Goals page')
  //   console.log(api.getLocalStorageUser())

  //   Axios.get('http://localhost:5000/api/whatever',).then(res=>{
  //     // console.log(res)
  //   })

  // }



  render() { 
    return (
      <div className="Goals">
        <h1>Add New Tasks</h1>
        <NewTodoForm 
          className="todoForm"
          formSubmitted={this.props.formSubmitted} 
          newTodoChanged={this.props.newTodoChanged}
          newTodo={this.props.newTodo}
        />
        <MDBBtn onClick={() => this.props.allDone ()}>All Done</MDBBtn>
        <TodoList 
          todos={this.props.todos}
          toggleTodoDone={this.props.toggleTodoDone}
          removeTodo={this.props.removeTodo}
        />
      </div>
    );
  }
}