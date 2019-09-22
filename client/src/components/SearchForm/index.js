import React, {Component} from "react";
import Jumbotron from "../Jumbotron"
// import axios from "axios"
// import Artist from "../../models"
import "./style.css";
import Axios from "axios";
// import imageCard from "../imageCard/index";


class SearchForm extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: "",
      art_title: "",
      art_date: "",
      nationality: "",
      url: "",
      thumbnail: ""
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
    console.log(this.state.userInput)
  }
  
  render() {
    return (
      <div>
        <Jumbotron />
        <div className="container">
          <form className="form-group" action="/" method="GET">
            <label>Artist Search</label>
            <input 
              name="name"
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