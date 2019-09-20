import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/Authentication/Signin"
import NavBar from "./components/NavBar";
// import Header from "./components/Header";
// import SearchForm from "./components/SearchForm";
import CreateAcc from "./components/Authentication/CreateAcc";
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Switch>
        <SignIn />
        <Route exact path="/login" component={ SignIn }/>
        <Route exact path="/createaccount/" component={ CreateAcc }/>
        {/* <Route exact path="/" component={SearchForm} />
        <Route exact path="/artist" component={Header} /> */}
        {/* <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
  );
}

export default App;