import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

export function NavBar() {
    return (
        <div className="nav-link-container">
            <li className="nav-item nav-item-link">
                <Link to="/" className="nav-link">Search</Link>
            </li>
            <li className="nav-item nav-item-link">
                <Link to="/saved" className="nav-link">Saved</Link>
            </li>
            <li className="nav-item nav-item-link">
                <Link to="/login" className="nav-link">Log out</Link>
            </li>
        </div>
    )
}