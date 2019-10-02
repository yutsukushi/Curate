import React from "react";
import "./Card.css";

//this component is only rendering the images to the screen and can be a simple render function it is a
//stateless component
const ImageCard = props => {
  return (
    <div className="card">
      <img src={props.thumbnail} alt="artwork" className="hero-image"></img>
      <div>
          <ul className="card-list">
            <li className="art_title">{props.title}</li>
            <li className="artist_name">{props.name}</li>
            <li className="medium">{props.medium}</li>
            <li className="art_date">{props.date}</li>
            <li className="nationality">{props.nationality}</li>
          </ul>
          <form action="/saved" method="POST">
          <button className="saveArt" 
          data-id={props.cardId}
          onClick={props.handleSaveArtist}>
          +</button></form>
          <button className="profileButton">View Profile</button>
      </div>
    </div>
  );
}

export default ImageCard;

//fake comments blahhhhhhh