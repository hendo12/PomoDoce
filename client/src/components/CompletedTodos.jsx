import React, { Component } from 'react';
import Axios from 'axios';
import { SERVER_URL } from '../config'


export default class CompletedTodos extends Component {

  componentDidMount(){
    
    //console.log(api.isLoggedIn())
    //console.log(api.getLocalStorageUser())
    Axios.get(`${SERVER_URL}/whatever`,).then(res=>{
      // console.log(res)
    })
  }



  render() { 
    return (
      <ol>
        {this.props.completedTodos.map((res, index) => {
            console.log(res)
            return(
              <li key={index} className="done card card-container">
                {this.props.completedTodos[index].title}
              </li>
            )
        })}
      </ol>
    );
  }
}