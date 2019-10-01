import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

export function NavBar(props) {
    return (
        <div className="nav-link-container">
            <li className="nav-item nav-item-link">
                <Link to="/search" className="nav-link">Search</Link>
            </li>
            <li className="nav-item nav-item-link">
                <Link to="/saved" className="nav-link" handleSavedArtist={props.handleSavedArtist}>My Profile</Link>
            </li>
            <li className="nav-item nav-item-link">
                <Link to="/" className="nav-link">Log out</Link>
            </li>
        </div>
    )
}