import React from "react";
import { BrowserRouter } from "react-router-dom";
// import CreateAcc from "./CreateAcc";

function SignIn(props) {

  return (
    
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
        onSubmit={props.handleLogInSubmit}>
          Sign In
        </button>
        <button 
        onClick={props.handleOnClick}>
          Create Account
        </button>
      </form>
    </BrowserRouter>
  )
}

export default SignIn;