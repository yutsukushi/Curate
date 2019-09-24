import React, {Component} from "react";
// import Artist from "../../models"
import "./style.css";
import Axios from "axios";
import { Link } from "react-router-dom";

// import imageCard from "../imageCard/index";


class SearchForm extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: "",
      serverResponse: null
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
            <div className="container">
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
                    className="btn btn-primary btn-search" 
                    onClick={this.handleArtistSubmit}>
                      Search
                  </button>
                </form>
              </div>
            </div>
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
            <div className="card img-container hover">
              <img src={this.state.thumbnail} alt="artwork"></img>
              <ul>
                <li className="art_title">{this.state.art_title}Art Title</li>
                <li className="art_date">{this.state.art_date}Date Created</li>
                <li className="artist_name">{this.state.name}Artist Name</li>
                <li className="nationality">{this.state.nationality}Artist Nationality</li>
              </ul>
            </div>
          </div>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div>
      </div>
    );
  }
}
export default SearchForm;