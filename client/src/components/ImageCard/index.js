import React from "react";
import SaveBtn from "../Buttons/SaveBtn"
import "./Card.css";

//this component is only rendering the images to the screen and can be a simple render function it is a
//stateless component
function ImageCard ({thumbnail, title, name, medium, date, nationality, Button }) {
  return (
    <div className="card img-container hover">
    <img src={thumbnail} alt="artwork"></img>
        <ul>
          <li className="art_title">{title}</li>
          <li className="artist_name">{name}</li>
          <li className="medium">{medium}</li>
          <li className="art_date">{date}</li>
          <li className="nationality">{nationality}</li>
          {/* <SaveBtn /> */}
          <Button />
        </ul>
    </div>
  );
}

export default ImageCard;

//fake comments blahhhhhhh