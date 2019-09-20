import React from "react";
import "./style.css";
// import imageCard from "../imageCard/index";


function SearchForm(props) {
  return (
    <div className="container">
      <form className="form-group">
        <label>Artist Search</label>
        <input type="text" className="form-control" id="bookSearch"></input>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
      <div>
        <div className="card img-container hover">
          <img src={props.thumbnail} alt="artwork"></img>
          <ul>
            <li className="art_title">{props.title}Art Title</li>
            <li className="art_date">{props.date}Date Created</li>
            <li className="artist_name">{props.name}Artist Name</li>
            <li className="nationality">{props.nationality}Artist Nationality</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;