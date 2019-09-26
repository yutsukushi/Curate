import React from "react";
import "./Card.css";

//this component is only rendering the images to the screen and can be a simple render function it is a
//stateless component
const ImageCard = props => (
  <div className="card img-container hover">
  <img src={props.thumbnail} alt="artwork"></img>
      <ul>
        <li className="art_title">{props.title}</li>
        <li className="artist_name">{props.name}</li>
        <li className="medium">{props.medium}</li>
        <li className="art_date">{props.date}</li>
        <li className="nationality">{props.nationality}</li>
      </ul>
  </div>
);

export default ImageCard;

//Adding a comment for commit purposes......