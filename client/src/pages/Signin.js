import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Axios from "axios";

class SignIn extends Component {
  state = {
    username: "",
    password: ""
  }

  handleLogInSubmit = (event) => {
    event.preventDefault();
    Axios.get("/api/users/", {
      params: {
        username: this.state.username,
        password: this.state.password
      }
    })
      .then(res => {
        console.log(`User has logged in as ${(JSON.stringify(res.username))}`)
        this.props.history.push("/search");
      }).catch(err => {
        console.log(err);
      })

  }

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  render(props) {
    return (
      <div className="loginPage">
        <section className="containerLogin">
          <div className="responsiveLogo">Curate</div>
          <div className="formHeader">Login</div>
          <div className="responsiveSubtext">Your personal gallery for modern art.</div>
          <div className="loginForm">
            <form action="/login" method="GET">
              <div className="containerField">
                <span className="username">Username: </span>
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
                <span className="password">Password: </span>
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
                <button
                  onClick={this.handleLogInSubmit}>
                  Sign In
                </button>
                  <Link to="/createaccount/">
                    Create Account
                  </Link>
              </div>
            </form>
          </div>
        </section>
        <section className="containerLogo">
          <div className="LogoContainer">
            <div className="logoText">Curate</div>
          </div>
          <div className="logoSubtext">Your personal gallery for modern art.</div>
        </section>
      </div>
    );
  }
}

SignIn = withRouter(SignIn);
export default SignIn;
