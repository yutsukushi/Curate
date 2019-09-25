import React, {Component} from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { List, ListItem } from "../List";
import "./style.css";

// import imageCard from "../imageCard/index";


class SearchForm extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: "",
      serverResponse: []
    }
    this.handleArtistSubmit.bind(this);
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });

  }
  
  handleArtistSubmit = (event) => {
    event.preventDefault();
    console.log("inside handleArtistSubmit")
    Axios.get("/api/artists/", {
      params: {
        name: this.state.name
      }
    })
    .then(res => {
      console.log('handleArtistSubmit: res: ', res);
    this.setState({serverResponse: res.data});
    })
  }
  
  render() {
    return (
      <div>
        <div className="header">
          <ul className="nav">
            <li className=" nav-item logo-container">
              <h1 className="display-4" to="/">Goog Enheim
                <Link to="/"></Link>
              </h1>
            </li>
            <li className="container">
              <div className="searchContainer">
                <form className="form-group" action="/" method="GET">
                  <input 
                    name="name"
                    type="text" 
                    className="form-control" 
                    placeholder="Search for artist" 
                    onChange={this.handleInputChange} />
                  <button 
                    type="submit" 
                    className=" btn-search" 
                    onClick={this.handleArtistSubmit}>
                      Search
                  </button>
                </form>
              </div>
            </li>
            <li className="nav-item nav-item-link">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item nav-item-link">
              <Link to="/" className="nav-link">Search</Link>
            </li>
            <li className="nav-item nav-item-link">
              <Link to="/saved" className="nav-link">Saved</Link>
            </li>
          </ul>
        </div>
        <div>
          <div>
            {this.state.serverResponse.length ? (
              <List>
                {this.state.serverResponse.map(card => (
                  <ListItem 
                    key={card._id}
                    alt={card.Artist} 
                    image={card.ThumbnailURL}>
                  <div className="card img-container hover">
                  <img src={card.ThumbnailURL} alt="artwork"></img>
                    <ul>
                      <li className="art_title">{card.Title}</li>
                      <li className="art_date">{card.Date}</li>
                      <li className="artist_name">{card.Artist}</li>
                      <li className="nationality">{card.Nationality}</li>
                    </ul>
                  </div>
                  </ListItem>
                ))}
            </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
          {/* TESTING PURPOSEs */}
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div>
      </div>
    );
  }
}
export default SearchForm;