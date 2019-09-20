import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/Authentication/Signin"
import CreateAcc from "./components/Authentication/CreateAcc";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import SearchForm from "./components/SearchForm";
import Saved from "./components/SavedArtists/Saved"
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/login" component={ SignIn }/>
        <Route exact path="/createaccount/" component={ CreateAcc }/>
        <Route exact path="/" component={ SearchForm } />
        <Route exact path="/saved" component= { Saved } />
        <Route exact path="/artist" component= { Jumbotron } />
        {/* <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
  );
}

export default App;