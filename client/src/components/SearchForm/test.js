import React, {Component} from "react";
import Jumbotron from "../Jumbotron"
// import axios from "axios"
// import Artist from "../../models"
import "./style.css";
import axios from "axios";
// import imageCard from "../imageCard/index";

class SearchForm extends Component {
    constructor(event) {
      super(event)
      this.state = {
        name: "",
        title: "",
        nationality: "",
        art_date: "",
        url: "",
        thumbnail: ""
      }
      this.handleArtistSubmit.bind(this);
    }
    handleInputChange = (event) => {
      console.log("handle input change has triggered")
      const { name, value } = event.target;
      // Set the state for the appropriate input field
      this.setState({
         [name]: value,
        // [title]: value,
        // [nationality]: value,
        // [art_date]: value,
        // [url]: value,
        // [thumbnail]: value
      });
      console.log(this.state)
    }
    handleArtistSubmit = (event) => {
      event.preventDefault();
      console.log("handle submit triggered")
      axios.get('/api', {params:{Artist: this.state.name}}
      ).then(function (response) {
        console.log(response);
        // for (var i = 0; i < response.data.length; i++) {
          this.setState({
            name: response.data.Artist
            // [title]: response.data[i].Title,
            // [nationality]: response.data[i].Nationality,
            // [art_date]: response.data[i].Date,
            // [url]: response.data[i].URL,
            // [thumbnail]: response.data[i].ThumbnailURL
          })
         }
      )
    };

    render() {
        return (
          <div>
            <Jumbotron />
            <div className="container">
              <form className="form-group" action="/" method="GET">
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