import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
// import CreateAcc from "./CreateAcc";

function SignIn(props) {

  return (
    
    <div className="containerLogin">
      <div className="loginForm">
        <form action="/login" method="GET">
          <div>
            <span>Username: {props.username}</span>
            <input
            type="text"
            placeholder="Username"
            name="username"
            value={props.username}
            onChange={props.handleInputChange}
            />
          </div>
          <div>
            <span>Password: {props.password}</span>
            <input
            type="password"
            placeholder="Password"
            name="password"
            value={props.password}
            onChange={props.handleInputChange}
            />
            <div>
              <button
              onClick={props.handleLogInSubmit}>
                  Sign In
              </button>
            </div>
          </div>
            <div>
                <Link to="/createaccount">
                  Create Account
                </Link>
            </div>
        </form>
      </div>
    </div>
);

}

export default SignIn;