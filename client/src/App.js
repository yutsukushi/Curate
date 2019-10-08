import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/Signin"
import CreateAcc from "./pages/CreateAcc";
import SearchForm from "./pages/SearchForm";
import Saved from "./pages/Saved"
import "normalize.css";
import './App.css';

function App() {
  return (
    <Router>
    <span className="">
      <Switch>
        <Route exact path="/" component={ SignIn }/>
        <Route exact path="/createaccount/" component={ CreateAcc }/>
        <Route exact path="/search" component={ SearchForm } />
        <Route exact path="/saved" component= { Saved } />
      </Switch>
    </span>
    </Router>
  );
}

export default App;