import React,{ Component } from "react";
import { Redirect, Link } from "react-router-dom";

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
            redirectTo: '/'
          })
          
        }).catch(err =>  {
          console.log(err)
        })

  }
  render() {

    if(this.state.redirectTo){
      return <Redirect to={{pathname:this.state.redirectTo}} />
    }

    return (
      <div className="loginPage">
        <section className="containerLogin">
          <div className="formHeader">Create your account</div>
          <div className="responsiveLogo">goo ġ Enheim
          </div>
          <div className="responsiveSubtext">goo ġ (noun, Australian): An egg; an art egg; an artistic egg that’s good for searching; a good searching egg.</div>
          <div className="loginForm">
            <form action="/createaccount/" method="POST">
              <div className="containerField">
                <span className="username">Username:</span>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="containerField">
                <span className="password">Password:</span>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="buttonContainer">
                <button onClick={this.handleFormSubmit}>
                  Create Account
                </button>
                <Link to="/">
                  Already have an account?
                </Link>
              </div>
            </form>
          </div>
        </section>
        <section className="containerLogo">
          <div className="LogoContainer">
            <div className="logoText">goo ġ enheim</div>
          </div>
          <div class="logoSubtext">
            goo ġ (noun, Australian): An egg; an art egg; an artistic egg that’s good for searching; a good searching egg.
          </div>
        </section>
      </div>
    );
  }
    
  }

export default CreateAcc;