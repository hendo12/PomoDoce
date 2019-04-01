import React, { Component } from 'react';
import Axios from 'axios';
import { SERVER_URL } from '../../config'

export default class Contact extends Component {

  componentDidMount(){

    //console.log(api.isLoggedIn())
    //console.log(api.getLocalStorageUser())

    Axios.get(`${SERVER_URL}/whatever`,).then(res=>{
      // console.log(res)
    })

  }

  render() {                
    return (
      <div className="contact addCard">
        <h3>About Me</h3> 

        <br></br>

        <p>
           My name is Henry Doce and I am a true Miami lifer. I was born in Hialeah Hospital, AKA in the City of Progress. 
           I'm a cryptocurrency enthusiast, digital privacy advocate, 
           two time award winning dancer (at my gym and at Ironhack's Web Dev bootcamp), and Seinfeld is 
           the greatest show to date.
        </p>

           <br></br>
           <br></br>

        <h3>About PomoDoce</h3> 
        
        <p>
           PomoDoce is a time management and todo list app which implements the Pomodoro technique to maximize user productivity 
           and accountability. The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 
           1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by 
           short breaks. I've personally found the combination of both of these techniques to be extremely effective in keeping 
           my easily distracted mind clear, focused, and fresh.
        </p>

        <br></br>
        <br></br>

        <div>
          <h3>Contact</h3>

          <br></br>

          <div>
            <label>Email: </label>
            <a href = "mailto: henrydoce@protonmail.com">henrydoce@protonmail.com</a>
            <br></br>
            <label>Github: </label>
            <a href="https://github.com/hendo12">@hendo12</a>
            <br></br>
            <label>LinkedIn: </label> 
            <a href="https://www.linkedin.com/in/henrydoce/">@henrydoce</a>
          </div>
        </div>
      </div> 
    )
  }
}