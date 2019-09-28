import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
// import CreateAcc from "./CreateAcc";

function SignIn(props) {

  return (
    
    <div>
    <BrowserRouter>
    <form action="/login" method="GET">
        <span>Username: {props.username}</span>
        <input
        type="text"
        placeholder="Username"
        name="username"
        value={props.username}
        onChange={props.handleInputChange}
        />
        <span>Password: {props.password}</span>
        <input
        type="password"
        placeholder="Password"
        name="password"
        value={props.password}
        onChange={props.handleInputChange}
        />
        <button
        onClick={props.handleLogInSubmit}>
            Sign In
        </button>
        
        <div>
            <Link to="/createaccount/">
              Create Account
            </Link>
        </div>
    </form>
    </BrowserRouter>
    </div>
);

}

export default SignIn;