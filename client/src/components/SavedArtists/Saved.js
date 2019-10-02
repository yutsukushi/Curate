import React, { Component } from "react";
import { NavBar } from "../NavBar";
// import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import { List, ListItem } from "../List";
import ImageCard from "../ImageCard";
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

        let removeArtwork = _.find(this.state.serverResponse, { '_id': event.target.dataset.id });
        console.log("remove artwork" + removeArtwork)
        Axios.delete("/saved", removeArtwork);
    }

    render() {
        return (
            <div className="box">
                <div className="header">
                    <Logo />
                    <NavBar/>
                    </div>
                    <div className="body">
                    
                    <h4>Saved</h4>
                    <div className="savedArt">
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
                                                data-id={art._id}Button={() => (
                                                    <button
                                                    data-id={art._id}
                                                      onClick={(event) => this.handleDeleteArtist(event)}
                                                    >
                                                      x
                                                    </button>
                                                )}
                                            />
                                        </ListItem>
                                    );
                                })}
                            </List>
                        ) : ( 
                                <h5>No Results to Display</h5>
                            )}
                    </div>

                </div>
            </div>



        )
    }

}

export default Saved;