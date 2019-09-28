import React, {Component} from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
// import CreateAcc from "./CreateAcc";

const handleLogInSubmit = (event) => {
  event.preventDefault();
  Axios.get("/api/users/", {
    params: {
      username: "",
      password: ""
    }
  })
    .then(res => {
      console.log("User has logged in: " + res)
    })

}

class SignIn extends Component {
  state = {
    username: "Dustin",
    password: "1234"
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    debugger;

    this.setState({
      [name]: value
    });
  }

  render (props) {
  return (
    <div>
      <form action="/login" method="GET">
        <span>Username: </span>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <span>Password: </span>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <button
          onClick={handleLogInSubmit}>
          Sign In
          </button>

        <div>
          <Link to="/createaccount/">
            Create Account
          </Link>
          <pre>{JSON.stringify(this.state)}</pre>
        </div>
      </form>
    </div>
  );
}
}

export default SignIn;