import React from "react";
import "./style.css";

function NavBar() {
  return ( 
  <div className="header">
    <ul className="nav">
      <li className="nav-item">
        <h1 className="title"> Artists </h1>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="../pages/Search">Search</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="../pages/Saved">Saved</a>
      </li>
    </ul>
  </div>
  )
}

export default NavBar;