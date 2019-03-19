import React, { Component } from 'react';
import Axios from 'axios';
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
            <ol>
              <li>Goal 1</li>
              <li>Goal 2</li>
              <li>Goal 3</li>
            </ol>
          </div>
          
        </div>
      </div>
    );
  }
}