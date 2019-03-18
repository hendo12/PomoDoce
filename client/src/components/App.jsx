import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Goals from './pages/Goals';
import Profile from './pages/Profile';
import api from '../api';

export default class App extends Component {
    state = {
      user: {},
    }
  



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
            render={(props) => <Home {...props}  setUser={this.setUser} />}
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
            render={(props) => <Goals {...props} setUser={this.setUser}  />}
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