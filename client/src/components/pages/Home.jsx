import React, { Component } from 'react';
import Axios from 'axios';
import api from '../../api'
import TodoList from '../TodoList';

export default class Home extends Component {

  
  componentDidMount(){

    //console.log(api.isLoggedIn())
    //console.log(api.getLocalStorageUser())

    Axios.get('http://localhost:5000/api/whatever',).then(res=>{
      // console.log(res)
    })

  }


  render() {                
    return (
      <div className="Home">
        <div className="Timer">
          <h3> {this.props.timeLeft(this.props.timeRemaining)}</h3>

          <button onClick={this.props.pTimer}>Start</button>
          <button>Stop</button>
          <button>Reset</button>
        </div>
        <div className="Todo">
          <h3>ToDo</h3>
          <TodoList todos={this.props.todos} toggleTodoDone={this.props.toggleTodoDone} removeTodo={this.props.removeTodo} />
        </div>
      </div>
    );
  }
}
