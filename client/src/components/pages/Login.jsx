import React, { Component } from 'react';
import api from '../../api';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      message: null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick(e) {
    e.preventDefault()
    api.login(this.state.username, this.state.password)
      .then(result => {
        // console.log(api.getLocalStorageUser())
        // this.setState({user:api.getLocalStorageUser()})
        this.props.setUser()
        this.props.setTodos()
        this.props.history.push("/") // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    console.log()
    return (
      <div className="centerCard signUpImage">
        <div className="Signup bigCard card-container centerCard">
          <h2 className="signupElements">Login</h2>
          <form className="signupElements">
            Username: <input type="text" value={this.state.username} name="username" onChange={this.handleInputChange} /> <br />
            Password: <input type="password" value={this.state.password} name="password" onChange={this.handleInputChange} /> <br />
            <button onClick={(e) => this.handleClick(e)}>Login</button>
          </form>
          {this.state.message && <div className="info info-danger">
            {this.state.message}
          </div>}
        </div>
      </div>
    );
  }
}
