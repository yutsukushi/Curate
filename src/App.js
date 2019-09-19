// import React, { Component } from 'react';
// import { Redirect } from "react-router-dom";
import { BrowserRouter as Switch, Route, Router } from "react-router-dom";
import NavBar from "./components/Homepage/NavBar";
import Header from "./components/Homepage/Header";
import SearchForm from "./components/Homepage/SearchForm";
// import SignIn from "./components/Authentication/Signin";
// import CreateAcc from "./components/Authentication/CreateAcc";
import './App.css';

// class App extends Component {

//     // Authentication 
//     state = {
//         username: "",
//         password: "",
//         navigate: false
//       };

//     // handle any changes to the input fields
//     handleInputChange = event => {
//     // Pull the name and value properties off of the event.target (the element which triggered the event)
//         const { name, value } = event.target;

//         // Set the state for the appropriate input field
//         this.setState({
//         [name]: value
//         });
//     };

//     // When the form is submitted, prevent the default event and alert the username and password
//     handleLogInSubmit = event => {
//         event.preventDefault();
//         console.log("perform a GET method")
//         this.setState({ username: "", password: "" });
//         return <Redirect to="/"/>
//         // TODO:
//         // on click redirect to homepage "/" route
//         // perform method GET, and compare username/password values to see if it matches entries in our DB.
//     };

//      // Redirects page to register an account
//      handleOnClick = () => {
//       console.log("button clicked");
//       // this.setState({ navigate: true });
//       // return <Redirect to="/createaccount"/>;
//     }

//     // When the form is submitted, prevent the default event and alert the username and password
//     // If values satisfy signin requirements and don't match any existing entries in DB,
//     // 
//     handleCreateAccountSubmit = event => {
//         event.preventDefault();
//         if (!this.state.username || !this.state.password) {
//             alert("Fill out your username and password please!");
//           } else if (this.state.password.length < 6) {
//             alert(
//               `Choose a more secure password, ${this.state.username}`
//             );
//           } else {
//             alert(`Hello ${this.state.username}`);
//           }
//         this.setState({ username: "", password: "" });
//         // TODO:
//         // perform POST method to create database entry for account.
//     };

//     render() {
//       return (
//         <div>
//           <Switch>
//             <Route 
//             path="/login" 
//             exact render={() => (this.props.user 
//             ? (alert("its working"), 
//             (<Redirect to="/createaccount"/>)) 
//             : (<CreateAcc />))} />
//           </Switch>
//             <SignIn 
//             onClick={this.handleOnClick}
//             onSubmit={this.handleLogInSubmit}
//             onChange={event => this.handleInputChange(event)}/>
//             {/* <CreateAcc 
//             onClick={this.handleCreateAccountSubmit}
//             onChange={event => this.handleInputChange(event)}/> */}
//         </div>   
//       )
//     };

// }

// export default App;
    