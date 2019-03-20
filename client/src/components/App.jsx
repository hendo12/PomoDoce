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
      todos: [],
      completedTodos: [],
      timeRemaining: 1500000,
      rounds:{first:3000, second:5000, third:8000}, //1.5 mill ms = 25 min
      roundMessage: ''
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
      axios.post('http://localhost:5000/api/replaceAllTodos', {todos}).then(res=>{
        console.log(res, {todos})
      this.setState({
        todos
      })
      this.completedTodos();
      })
    }
  
  
    removeTodo = (index) => {
      const todos = [...this.state.todos];
      todos.splice(index, 1);
      axios.post('http://localhost:5000/api/replaceAllTodos', {todos}).then(res=>{
        this.setState({
        todos
        })
      })
    }
  
    allDone = () => {
      const todos = this.state.todos.map( (todo) => {
        return {
          title: todo.title,
          done: true
        }
      })
      axios.post('http://localhost:5000/api/replaceAllTodos', {todos}).then(res=>{
      this.setState({
        todos
      })
      })
    }
  /*----------------------------------------------------User Login functionality------------------------------------------------*/
  componentDidMount() {
    this.setUser()
    this.setTodos()
    this.completedTodos()
  }

  componnentWillReceiveProps(){
    this.setTodos()
    //this.completedTodos()

  }

  setTodos = () => {
    let todosArray = [];
    axios.get('http://localhost:5000/api/getAllTodos').then(res => {
      console.log(res)
      let todos = res.data.todoList.todos;
      todos.map((res, i) => {
        if(res.done === false) {
          return todosArray.push(res);
        }
        return todosArray;
      })
      this.setState({todos:todosArray})
    })
  }

  completedTodos = () => {
    let completedTodos= [];
    axios.get('http://localhost:5000/api/getAllTodos').then(res => {
      let todos = res.data.todoList.todos;

      todos.map((res, i) => {
        if(res.done === true) {
          console.log(res)
          completedTodos.push(res);
        } 
        console.log(completedTodos)
        return completedTodos;
      })
    this.setState({
        completedTodos
      })
    })
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
    this.setState({
      todos:[],
      completedTodos:[]
    })
    //this.setState({user:null})
    this.setUser()
  }

  /*----------------------------------------------------Timer functionality------------------------------------------------*/
pIntervals = (time) => {
    var round;
    var roundMessage;
    //console.log(time/1000, time < 2000);
    // this.setState({timeRemaining:time})
    // this.setState({totalTime:time})
    
    switch (true) {
      case time < 1500000: //25 mins of working
        round = "First Round";
        roundMessage = 'Get to it!';
        if(this.state.round!=="First Round"){
          this.countDown(1500000)
        }        //this.setState({timeRemaining:300000})
        break;
      case time < 1800000: //5 min break
        round = "Second Round";
        roundMessage = 'Break time! Take deep breathes, meditate, go for a walk, or stare off into the distance.';
        if(this.state.round!=="Second Round"){
          this.countDown(300000)
        }   
        //this.setState({timeRemaining:1500000})
        break;
      case time < 3300000: //25 mins of working
        round = "Third Round";
        roundMessage = 'Back to work. You got this!';
        if(this.state.round!=="Third Round"){
          this.countDown(1500000)
        }   
        //his.setState({timeRemaining:300000})
        break;
      case time < 3600000: //5 min break
        round = "Fourth Round";
        roundMessage = 'Take a few minutes to relax and come back stronger.';
        if(this.state.round!=="Fourth Round"){
          this.countDown(300000)
        } 
        break;
      case time < 5100000: //25 mins of working
        round = "Fifth Round";
        roundMessage = 'Halfway to the long break. Keep it up!';
        if(this.state.round!=="Fifth Round"){
          this.countDown(1500000)
        } 
        break;
      case time < 5400000: //5 min break
        round = "Sixth Round";
        roundMessage = 'Running through these tasks like a DOCTA! Now relax a bit.';
        if(this.state.round!=="Sixth Round"){
          this.countDown(300000)
        }
        break;
      case time < 6900000: //25 mins of working
        round = "Seventh Round";
        roundMessage = 'Last work round before the long break! Push through!';
        if(this.state.round!=="Seventh Round"){
          this.countDown(1500000)
        }
        break;
      case time < 8100000: //20 min break
        round = "Eigth Round";
        roundMessage = 'Way to go champ! Take that longer break and treat yoself!';
        if(this.state.round!=="Eigth Round"){
          this.countDown(1200000)
        }
        break;
      default: 
        round = "";
    }
    if(round !== this.state.round){
      this.setState({
        round,
        roundMessage
      })
    }
    console.log(round);
    return round;
  };
  
pTimer = () => {
  let time = 0;
  
  setInterval(() => {
    this.pIntervals(time);
    time += 1000;

    if (time > 8100000) {
      time = 0;
    }
  }, 1000);
};

countDown = (num) => {
    //var time = 5;
    var timer = setInterval(() =>{
      num-=1000;
      this.resetTime(num);
      if (num === 0) {
        clearInterval(timer);
      }
    }, 1000);
}


timeLeft (millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

resetTimer () {
  //this.setState({timeRemaining: 1500000 })
  //also need to reset time variable within the pTimer function???? HOW????
  console.log('Timer reset')
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">PomoDoce</h1>
          <NavLink to="/" exact>Home</NavLink>
          {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && <NavLink to="/profile">Profile</NavLink>}
          {api.isLoggedIn() && <NavLink to="/goals" >Goals</NavLink>}
          {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link>}
          {this.state.user.username}
        </header>
        <Switch>


        <Route
            exact
            path='/'
            render={(props) => <Home {...props}  completedTodos={this.state.completedTodos} resetTimer={this.resetTimer} roundMessage={this.state.roundMessage} round={this.state.round} setUser={this.setUser} todos={this.state.todos} toggleTodoDone={this.toggleTodoDone} removeTodo={this.removeTodo} pIntervals={this.pIntervals} pTimer={this.pTimer} timeRemaining={this.state.timeRemaining} timeLeft={this.timeLeft} resetTimer={this.resetTimer} />}
          />
          <Route
            path='/signup'
            render={(props) => <Signup {...props} setUser={this.setUser} />}
          />
          <Route
            path='/login'
            render={(props) => <Login {...props} setUser={this.setUser} setTodos={this.setTodos}/>}
          />
          <Route
            path='/goals'
            render={(props) => <Goals {...props} setUser={this.setUser}  newTodoChanged={this.newTodoChanged} formSubmitted={this.formSubmitted} toggleTodoDone={this.toggleTodoDone} removeTodo={this.removeTodo} allDone={this.allDone} todos={this.state.todos} newTodo={this.state.newTodo} />}
          />
          <Route
            path='/profile'
            render={(props) => <Profile {...props} refreshCompletedTodos={this.completedTodos} completedTodos={this.state.completedTodos} setUser={this.setUser}/>}
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