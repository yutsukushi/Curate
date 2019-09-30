
import React, { Component } from "react";
import SignIn from "../Authentication/Signin";
import CreateAcc from "../Authentication/CreateAcc";

class Homepage extends Component {
  state = {
    artists: [],
    Register: true
  };

  toggleRegister = (e) => { 
      const {name} = e.target
      if (name === "Register"){
          this.setState({Register: true})
      } else {
        this.setState({Register: false})
      }

      
  } 

  render() {
    return (
      <div className="card">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Sign In Page</h5>
            {this.state.Register ? <CreateAcc /> : <SignIn />}
            <button onClick={this.toggleRegister} type="button" class="btn btn-primary" name="SignIn">
              Sign In
            </button>
            <button onClick={this.toggleRegister} type="button" class="btn btn-primary" name="Register">
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;