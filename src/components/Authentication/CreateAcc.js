import React from "react";
// import { BrowserRouter } from "react-router-dom";

function CreateAcc(props) {

    return (
        <form action="/createaccount/" method="POST">
          <span>Username: {props.username}</span>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={props.username}
            onChange={props.onChange}
          />
          <span>Password: {props.password}</span>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={props.password}
            onChange={props.onChange}
          />
          <button onClick={props.handleCreateAccountSubmit}>
              Create Account
          </button>
        </form>
    );
  }

export default CreateAcc;