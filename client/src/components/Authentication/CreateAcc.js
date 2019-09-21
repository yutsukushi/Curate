import React,{ Component } from "react";
import { BrowserRouter, Redirect } from "react-router-dom";
import axios from "axios";

class CreateAcc extends Component {
  state = {
    username: "",
    password: "",
    redirectTo: null
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });

  }

  handleFormSubmit = event => {
    event.preventDefault();
        if (!this.state.username || !this.state.password) {
            alert("Fill out your username and password please!");
          } else if (this.state.password.length < 6) {
            alert(
              `Choose a more secure password, ${this.state.username}`
            );
          } else {
            alert(`Hello ${this.state.username}`);
          }
        axios.post('/auth/createAccount',
        {
          username: this.state.username,
          password: this.state.password
        }).then(response => {
          console.log(response);
          this.setState({
            redirectTo: '/login'
          })
          
        })

  }
  render() {

    if(this.state.redirectTo){
      return <Redirect to={{pathname:this.state.redirectTo}} />
    }

    return (
      <BrowserRouter>
        <form action="/createaccount/" method="POST">
          <span>Username: {this.state.username}</span>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.state.handleInputChange}
          />
          <span>Password: {this.state.password}</span>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.state.handleInputChange}
          />
          <button onClick={this.handleFormSubmit}>
              Create Account
          </button>
        </form>
      </BrowserRouter>
    );
  }
    
  }

export default CreateAcc;