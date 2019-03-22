import React, { Component } from 'react';
import api from '../../api';

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      name: "",
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
    let data = {
      username: this.state.username,
      name: this.state.name,
      password: this.state.password,
    }
    api.signup(data)
      .then(result => {
        console.log('SUCCESS!')
        this.props.setUser()
        this.props.history.push("/") // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    return (
      <div className="centerCard signUpImage">
        <div className="Signup bigCard card-container centerCard">
          <h2 className="signupElements">Signup</h2>
          <div>
            <form className="signupElements">
              Username: <input type="text" value={this.state.username} name="username" onChange={this.handleInputChange} /> <br />
              Password: <input type="password" value={this.state.password} name="password" onChange={this.handleInputChange} /> <br />
              <button className="btnCenter" onClick={(e) => this.handleClick(e)}>Signup</button>
            </form>
          </div>
          {this.state.message && <div className="info info-danger">
            {this.state.message}
          </div>}
        </div>
      </div>
    );
  }
}