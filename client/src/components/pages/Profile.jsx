import React, { Component } from 'react';
import Axios from 'axios';
import CompletedTodos from '../CompletedTodos'
import api from '../../api'

export default class Profile extends Component {

  componentDidMount(){
    //console.log(api.isLoggedIn())
    //console.log(api.getLocalStorageUser())

    Axios.get('http://localhost:5000/api/whatever',).then(res=>{
      // console.log(res)
    })
  }

  render() {                
    return (
      <div className="Profile">
        <div className="CompletedGoals">
          <h1>Completed Goals</h1>
          <div>
            <CompletedTodos completedTodos={this.props.completedTodos}/>
          </div>
          
        </div>
      </div>
    );
  }
}