import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Homepage/NavBar";
import Header from "./components/Homepage/Header";
import SearchForm from "./components/Homepage/SearchForm";

function App2() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={SearchForm} />
          <Route exact path="/books" component={Header} />
        </Switch>
      </div>
    </Router>
  );
}

export default App2;