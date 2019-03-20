import React, { Component } from 'react';
import Axios from 'axios';


export default class CompletedTodos extends Component {

  componentDidMount(){
    
    //console.log(api.isLoggedIn())
    //console.log(api.getLocalStorageUser())
    Axios.get('http://localhost:5000/api/whatever',).then(res=>{
      // console.log(res)
    })
  }



  render() { 
    return (
      <ol>
        {this.props.completedTodos.map((res, index) => {
            console.log(res)
            return(
              <li key={index} className="done">
                {this.props.completedTodos[index].title}
              </li>
            )
        })}
      </ol>
    );
  }
}