import React, { Component } from "react";
import { NavBar } from "../NavBar";
// import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import { List, ListItem } from "../List";
import DeleteBtn from "../Buttons/DeleteBtn";

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
                    {this.state.savedArt.length ? (
                        <List>
                        {this.state.savedArt.map(art => (
                            <ListItem key={art._id}>
                                <a href={"/art/" + art._id}>
                                <strong>
                                    {art.title} by {art.artist}
                                </strong>
                                </a>
                                <DeleteBtn />
                            </ListItem>
                        ))}
                        </List>
                    ) : (
                        <h5>Saved works here.</h5>
                    )}
                </div>
            </div>
        )
    }
    
}

export default Saved;