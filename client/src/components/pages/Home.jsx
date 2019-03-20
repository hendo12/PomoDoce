import React, { Component } from 'react';
import Axios from 'axios';
import api from '../../api'
import TodoList from '../TodoList';
import { SERVER_URL } from '../../config'
import CompletedTodos from '../CompletedTodos'

export default class Home extends Component {

  
  componentDidMount(){

    //console.log(api.isLoggedIn())
    //console.log(api.getLocalStorageUser())

    Axios.get(`${SERVER_URL}/whatever`,).then(res=>{
      // console.log(res)
    })

  }


  render() {                
    return (
      <div className="Home">
        <div className="Timer">
          <h1> {this.props.timeLeft(this.props.timeRemaining)} </h1>
          <h3> {this.props.round} </h3>
          <p> {this.props.roundMessage} </p>
          <br></br>

          <button onClick={this.props.pTimer}>Start</button>
          <button>Stop</button>
          <button onClick={this.props.stopTimer}>Reset</button>
        </div>
        <div className="Todo">
          <h3>ToDo</h3>
          <TodoList todos={this.props.todos} toggleTodoDone={this.props.toggleTodoDone} removeTodo={this.props.removeTodo} />
        </div>
        <div className="completedTodos">
          <h3>Completed Tasks</h3>
          <CompletedTodos completedTodos={this.props.completedTodos} />

        </div>
      </div>
    );
  }
}
