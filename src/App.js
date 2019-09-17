import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import SignIn from "./components/Authentication/Signin"
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={SearchForm} />
        <Route exact path="/artist" component={Header} />
        {/* <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
  );
}

export default App;