import React, { Component } from "react";
import { NavBar } from "../NavBar";
// import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import { List, ListItem } from "../List";
import DeleteBtn from "../Buttons/DeleteBtn";
import ImageCard from "../ImageCard";
import Axios from "axios";
import _ from "lodash";

class Saved extends Component {

    constructor (props) {
        super(props)
        this.state = {
          serverResponse: []
        }
        this.handleDeleteArtist.bind(this);
    }

    handleDeleteArtist = (event) => {
        event.preventDefault();

        let removeArtwork = _.find(this.state.serverResponse, { '_id': event.target.dataset.id});
        console.log("remove artwork" + removeArtwork)
        Axios.delete("/saved", removeArtwork);
    }

    render() {
        return (
            <div className="header">
                <Logo />
                <NavBar />
                <h4>Saved</h4>
                <div className="savedArt">
                    {this.state.serverResponse.length ? (
                        <List>
                        {this.state.serverResponse.map(art => (
                            <ListItem key={art._id}>
                                <ImageCard 
                                thumbnail={art.ThumbnailURL} 
                                artId={art._id}
                                title={art.Title} 
                                date={art.Date} 
                                medium={art.Medium}
                                name={art.Artist} 
                                nationality={art.Nationality}
                                handleDeleteArtist={this.handleDeleteArtist} 
                                /> 
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