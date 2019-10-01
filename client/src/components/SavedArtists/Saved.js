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
          savedArt: []
        }
        this.handleDeleteArtist.bind(this);
        this.handleSavedArtist.bind(this);
    }

    // TODO:
    // when saved tab is clicked,
    // get the saved artworks and load page
    // render saved art cards with delete button
    // delete button should appear for each card, and delete functionality
    
    handleSavedArtist = () => {
        Axios.get("/saved", {
            params: {
                savedArt: this.state.savedArt
            }
        })
        .then(res => {
            console.log("saved artists: ", res)
        })
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
                <NavBar handleSavedArtist={this.handleSavedArtist}/>
                <h4>Saved</h4>
                <div className="savedArt">
                    {this.state.savedArt.length ? (
                        <List>
                        {this.state.savedArt.map(art => (
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