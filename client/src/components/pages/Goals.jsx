import React, { Component } from 'react';
import Axios from 'axios';
import api from '../../api'
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
        <h1>Goals</h1>
        <NewTodoForm 
          formSubmitted={this.props.formSubmitted} 
          newTodoChanged={this.props.newTodoChanged}
          newTodo={this.props.newTodo}
        />
        <button onClick={() => this.props.allDone ()}>All Done</button>
        <TodoList 
          todos={this.props.todos}
          toggleTodoDone={this.props.toggleTodoDone}
          removeTodo={this.props.removeTodo}
        />
      </div>
    );
  }
}