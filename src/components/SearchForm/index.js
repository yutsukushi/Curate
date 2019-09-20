import React, {Component} from "react";
import Jumbotron from "../Jumbotron"
import axios from "axios"
import Artist from "../../models"
import "./style.css";
// import imageCard from "../imageCard/index";


class SearchForm extends Component {

  constructor () {
    super()
    this.state = {
      thumbnail: "",
      title: "",
      date: "",
      name: "",
      nationality: ""
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
  
  handleArtistSubmit = () => {
    axios.get("/", function (req, res) {
      // Query: In our database, go to the animals collection, then "find" everything
      Artist.find({ Artist: this.state }, function (err, found) {
        // Log any errors if the server encounters one
        if (err) {
          console.log(err);
        }
        // Otherwise, send the result of this query to the browser
        else {
          console.log(found);
        }
      });
    });
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <div className="container">
          <form className="form-group" action="/submit" method="GET">
            <label>Artist Search</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search for artist" 
              onChange={this.handleInputChange} />
            <button 
              type="submit" 
              className="btn btn-primary" 
              onClick={this.handleArtistSubmit}>
                Search
            </button>
          </form>
          <div>
            <div className="card img-container hover">
              <img src={this.state.thumbnail} alt="artwork"></img>
              <ul>
                <li className="art_title">{this.state.title}Art Title</li>
                <li className="art_date">{this.state.date}Date Created</li>
                <li className="artist_name">{this.state.name}Artist Name</li>
                <li className="nationality">{this.state.nationality}Artist Nationality</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SearchForm;