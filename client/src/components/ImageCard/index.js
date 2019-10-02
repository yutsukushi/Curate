import React from "react";
// import SaveBtn from "../Buttons/SaveBtn"
import "./Card.css";

//this component is only rendering the images to the screen and can be a simple render function it is a
//stateless component
function ImageCard ({thumbnail, title, name, medium, date, nationality, Button }) {
  return (
    <div className="card">
      <img src={thumbnail} alt="artwork" className="card-img"></img>
      <div className="card-list">
        <ul>
          <li className="art_title">{title}</li>
          <li className="medium">{medium}</li>
          <li className="artist_name">{name}</li>
          <li className="art_date">{date}</li>
          <li className="nationality">{nationality}</li>
        </ul>
        <Button />
        <button className="profileButton">View Profile</button>
      </div>
    </div>
  );
}

export default ImageCard;

//fake comments blahhhhhhh