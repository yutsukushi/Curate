import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Axios from "axios";
// import CreateAcc from "./CreateAcc";



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
          <div className="responsiveLogo">Goo ġ Enheim</div>
          <div className="responsiveSubtext">Goo ġ (noun, Australian): An egg; an art egg; an artistic egg that’s good for searching; a good searching egg.</div>
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
            <div className="logoText">Goo ġ Enheim</div>
          </div>
          <div className="logoSubtext">
            Goo ġ (noun, Australian): An egg; an art egg; an artistic egg that’s good for searching; a good searching egg.
          </div>
        </section>
      </div>
    );
  }
}

SignIn = withRouter(SignIn);
export default SignIn;
