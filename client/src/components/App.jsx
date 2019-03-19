import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Goals from './pages/Goals';
import Profile from './pages/Profile';
import api from '../api';
import axios from 'axios'

export default class App extends Component {
    state = {
      user: {},
      newTodo: '',
      todos: []
    }
/*---------------------------------------------------Todo Functionality-----------------------------------------------------*/
    newTodoChanged = (event) => {
      this.setState({
        newTodo:event.target.value
      })
    }
  
    formSubmitted = (event) => {
      event.preventDefault();
      //save to the db 
      let todos = [...this.state.todos, {
        title: this.state.newTodo, 
        done: false
      }]
      axios.post('http://localhost:5000/api/replaceAllTodos', {todos}).then(res=>{

        this.setState({
          newTodo: '',
          todos:todos
        })
      })
    }

    toggleTodoDone = (event, index) => {
      console.log(event.target.checked)
      const todos = [...this.state.todos] //copy the array
      todos[index] = {...todos[index]} //copy the todo
      todos[index].done = event.target.checked //update done property on copied todo
      this.setState({
        todos
      })
    }
  
    removeTodo = (index) => {
      const todos = [...this.state.todos];
      todos.splice(index, 1);
  
      this.setState({
        todos
      })
  
    }
  
    allDone = () => {
      const todos = this.state.todos.map( (todo) => {
        return {
          title: todo.title,
          done: true
        }
      })
      this.setState({
        todos
      })
    }
  /*----------------------------------------------------User Login functionality------------------------------------------------*/
  componentDidMount() {
    this.setUser()
  }

  setUser = () => {
    if (api.isLoggedIn()) {
      this.setState({ user: api.getLocalStorageUser() })
    } else {
      this.setState({ user: {} })
    }
  }

  handleLogoutClick(e) {
    api.logout()
    //this.setState({user:null})
    this.setUser()
  }

  /*----------------------------------------------------Timer functionality------------------------------------------------*/
pIntervals = (time) => {
    var round;
    console.log(time/1000, time < 2000);
    switch (true) {
      case time < 90000:
        round = "first";
        break;
      case time < 108000:
        round = "second";
        break;
      case time < 198000:
        round = "third";
        break;
      case time < 216000:
        round = "fourth";
        break;
      case time < 306000:
        round = "fifth";
        break;
      case time < 324000:
        round = "sixth";
        break;
      case time < 414000:
        round = "7th";
        break;
      case time < 486000:
        round = "8th";
        break;
      default: 
        round = "Looking forward to the Weekend";
    }
    console.log(round);
    return round;
  };
  
pTimer = () => {
    let time = 0;
    setInterval(() => {
      this.pIntervals(time);
      time += 1000;
      if (time > 486000) {
        time = 0;
      }
    }, 1000);
  };

  // timeRemaining () {


  //   return millis
  // }

  // function millisToMinutesAndSeconds(millis) {
  //   var minutes = Math.floor(millis / 60000);
  //   var seconds = ((millis % 60000) / 1000).toFixed(0);
  //   return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  // }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">PomoDoce</h1>
          user: {this.state.user.username}
          <NavLink to="/" exact>Home</NavLink>
          {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && <NavLink to="/profile">Profile</NavLink>}
          {api.isLoggedIn() && <NavLink to="/goals" >Goals</NavLink>}
          {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link>}
        </header>
        <Switch>


        <Route
            exact
            path='/'
            render={(props) => <Home {...props}  setUser={this.setUser} todos={this.state.todos} toggleTodoDone={this.toggleTodoDone} removeTodo={this.removeTodo} pIntervals={this.pIntervals} pTimer={this.pTimer} />}
          />
          <Route
            path='/signup'
            render={(props) => <Signup {...props} setUser={this.setUser} />}
          />
          <Route
            path='/login'
            render={(props) => <Login {...props} setUser={this.setUser}/>}
          />
          <Route
            path='/goals'
            render={(props) => <Goals {...props} setUser={this.setUser}  newTodoChanged={this.newTodoChanged} formSubmitted={this.formSubmitted} toggleTodoDone={this.toggleTodoDone} removeTodo={this.removeTodo} allDone={this.allDone} todos={this.state.todos} newTodo={this.state.newTodo} />}
          />
          <Route
            path='/profile'
            render={(props) => <Profile {...props} setUser={this.setUser}/>}
          />
          
          
          <Route render={() => <h2>404</h2>} />


        </Switch>

        {/* <Goals 
          additem={this.addItem} 
          inputElement={this.inputElement}

        /> */}
      </div>
    );
  }
}

/*          <Route
            path='/'
            render={(props) => <Home {...props} setUser={this.setUser} />}
          />
          <Route
            path='/signup'
            render={(props) => <Signup {...props} setUser={this.setUser} />}
          />
          <Route
            path='/login'
            render={(props) => <Login {...props} setUser={this.setUser}/>}
          />*/