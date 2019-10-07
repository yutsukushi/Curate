import React, { Component } from "react";
import { NavBar } from "../components/NavBar";
import { Logo } from "../components/Logo";
import { List, ListItem } from "../components/List";
import ImageCard from "../components/ImageCard";
import Axios from "axios";
import _ from "lodash";

class Saved extends Component {

    constructor(props) {
        super(props)
        this.state = {
            savedArt: ""
        }
    }

    componentDidMount() {
        this.handlePopulateArtist();
    };

    handlePopulateArtist = () => {
        Axios.get("/saved", {
            params: {
                username: this.state.username
            }
        })
            .then(res => {
                console.log("saved artists: ", res);
                this.setState({
                    savedArt: res.data.favorite_artworks
                });
            })
    }

    handleDeleteArtist = (event) => {
        event.preventDefault();
        let removeArtwork = _.find(this.state.savedArt, { '_id': event.target.dataset.id });
        console.log("remove artwork", removeArtwork)
        Axios.delete(`/saved/${removeArtwork._id}`)
            .then(res => {
            this.handlePopulateArtist();
        }
        );
    }

    render() {
        return (
            <div className="box">
                <div className="header">
                    <Logo />
                    <NavBar />
                </div>
                <div className="body">

                    <h4 className="intro-text">Saved</h4>
                    <div className="savedArt form-group-2">
                        {this.state.savedArt.length ? (
                            <List>
                                {this.state.savedArt.map(art => {
                                    return (
                                        <ListItem
                                            key={art._id}
                                            alt={art.Artist}
                                            image={art.ThumbnailURL}>
                                            <ImageCard
                                                thumbnail={art.ThumbnailURL}
                                                artId={art._id}
                                                title={art.Title}
                                                date={art.Date}
                                                medium={art.Medium}
                                                name={art.Artist}
                                                nationality={art.Nationality} 
                                                data-id={art._id} Button={() => (
                                                    <div className="form-group-2">
                                                        <button
                                                        data-id={art._id}
                                                        onClick={(event) => this.handleDeleteArtist(event)}
                                                        >
                                                        Remove
                                                        </button>
                                                    </div>
                                                )}
                                            />
                                        </ListItem>
                                    );
                                })}
                            </List>
                        ) : (
                                <p className="intro-text">Saved works here.</p>
                            )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Saved;