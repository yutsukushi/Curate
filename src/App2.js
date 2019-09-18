import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NavBar from "./components/NavBar";
// import Header from "./components/Header";
// import SearchForm from "./components/SearchForm";
import SignIn from "./components/Authentication/Signin";
import CreateAcc from "./components/Authentication/CreateAcc";
import './App.css';

class App2 extends Component {

    // Authentication 
    state = {
        username: "",
        password: ""
      };

    // handle any changes to the input fields
    handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;

        // Set the state for the appropriate input field
        this.setState({
        [name]: value
        });
    };

    // When the form is submitted, prevent the default event and alert the username and password
    handleLogInSubmit = event => {
        event.preventDefault();
        alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
        this.setState({ username: "", password: "" });
    };

    // When the form is submitted, prevent the default event and alert the username and password
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
        this.setState({ username: "", password: "" });
    };

    render() {
        return (
            <div>
                <SignIn onClick={this.handleLogInSubmit} onChange={event => this.handleInputChange(event)}/>
                <CreateAcc onClick={this.handleCreateAccountSubmit} onChange={event => this.handleInputChange(event)} handleFormSubmit={this.handleFormSubmit}/>
            </div>   
        )
    };

}

export default App2;
    