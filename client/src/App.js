import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/Authentication/Signin"
import CreateAcc from "./components/Authentication/CreateAcc";
import SearchForm from "./components/SearchForm";
import Saved from "./components/SavedArtists/Saved"
import "normalize.css";
import './App.css';

function App() {
  return (
    <Router>
    <span className="">
      <Switch>
        <Route exact path="/login" component={ SignIn }/>
        <Route exact path="/createaccount/" component={ CreateAcc }/>
        <Route exact path="/" component={ SearchForm } />
        <Route exact path="/saved" component= { Saved } />
      </Switch>
    </span>
    </Router>
  );
}

export default App;