import React from "react";
import { Link } from "react-router-dom";

export function Logo({children}) {
    return  (
        <div>
            <ul className="nav">
            <li className=" nav-item logo-container">
                <h1 className="display-4" to="/">Goog Enheim
                <Link to="/"></Link>
                </h1>
            </li>
            { children }
            </ul>
        </div>
    )
}