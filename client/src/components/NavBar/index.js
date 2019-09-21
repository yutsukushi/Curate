import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  return ( 

  <div className="header">
    <ul className="nav">
      <li className=" nav-item logo-container">
        <h1 className="display-4" to="/">Goog Enheim
          <Link to="/"></Link>
        </h1>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link">Login</Link>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link">Search</Link>
      </li>
      <li className="nav-item">
        <Link to="/saved" className="nav-link">Saved</Link>
      </li>
    </ul>
  </div>

  )
}

export default NavBar;