import React, { Component } from "react";
import { NavBar } from "../NavBar";
// import { Link } from "react-router-dom";
import { Logo } from "../Logo";

class Saved extends Component {

    state = {
        savedArt: []
    };

    render() {
        return (
            <div className="header">
                <Logo />
                <NavBar />
                <h4>Saved</h4>
                <div className="savedArt">
                    <h4>Saved works here.</h4>
                </div>
            </div>
        )
    }
    
}

export default Saved;