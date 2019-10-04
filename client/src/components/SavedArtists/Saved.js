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

    // this.handlePopulateArtist.bind(this);

    // TODO:
    // delete button should appear for each card, and delete functionality
    // this.handleDeleteArtist.bind(this);

    handleDeleteArtist = (event) => {
        event.preventDefault();
        let removeArtwork = _.find(this.state.savedArt, { '_id': event.target.dataset.id });
        console.log("remove artwork", removeArtwork)
        Axios.delete(`/saved/${removeArtwork._id}`);
    }
    sansArt = id => {
        // Filter this.state.friends for friends with an id not equal to the id being removed
        const art = this.state.savedArt.filter(art2 => art2.id !== id);
        // Set this.state.friends equal to the new friends array
        this.setState({ art });
      };
    render() {
        return (
            <div className="box">
                <div className="header">
                    <Logo />
                    <NavBar />
                </div>
                <div className="body">
                    {/* handlePopulateArtist={this.handlePopulateArtist}  */}

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
                {/* TESTING PURPOSEs
                < pre > {JSON.stringify(this.state, null, 2)}</pre > */}
            </div>



        )
    }

}

export default Saved;