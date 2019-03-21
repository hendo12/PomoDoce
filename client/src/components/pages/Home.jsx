import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";
import Axios from 'axios';
//import api from '../../api'
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
      <div className="Home hugeCard">
        <div className="Timer">
          <h1 className="time"> {this.props.timeLeft(this.props.timeRemaining)} </h1>
          <h3> {this.props.round} </h3>
          <p> {this.props.roundMessage} </p>
          <br></br>
          <div className="btnCenter">
            <button className="startBtn" onClick={this.props.toggleTimer}>Start/Pause</button>
          </div>
        </div>

        <div className="Todo">
          <h3>Today's Tasks</h3>
          <TodoList todos={this.props.todos} toggleTodoDone={this.props.toggleTodoDone} removeTodo={this.props.removeTodo} />
        </div>

        {/* <div className="completedTodos">
          <h3>Completed Tasks</h3>
          <CompletedTodos completedTodos={this.props.completedTodos} />
        </div> */}
      </div>
    );
  }
}
