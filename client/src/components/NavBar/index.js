import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

export function Navbar() {
    return (
        <div>
            <li className="nav-item nav-item-link">
                <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item nav-item-link">
                <Link to="/" className="nav-link">Search</Link>
            </li>
            <li className="nav-item nav-item-link">
                <Link to="/saved" className="nav-link">Saved</Link>
            </li>
        </div>
    )
}