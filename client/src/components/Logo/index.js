import React from "react";
import { Link } from "react-router-dom";

export function Logo({children}) {
    return  (
        <div className="logoContainer">
            <ul className="nav">
                <li className=" nav-item logo-container">
                    <h1 className="display-4" to="/">Curate
                    <Link to="/"></Link>
                    </h1>
                </li>
            { children }
            </ul>
        </div>
    )
}