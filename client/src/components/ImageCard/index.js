import React from "react";
import "./Card.css";

function ImageCard ({thumbnail, title, name, medium, url, date, nationality, Button, handleFullSizeImage}) {
  return (
    <div className="card">
      <img data-url="234" src={thumbnail} alt="artwork" className="card-img" 
      onClick={(event) => handleFullSizeImage(url, event)}></img>
      <div className="card-list">
        <ul className="card-info">
          <li className="art_title">{title}</li>
          <li className="medium">{medium}</li>
          <li className="artist_name">{name}</li>
          <li className="art_date">{date}</li>
          <li className="nationality">{nationality}</li>
        </ul>
        <Button />
      </div>
    </div>
  );
}

export default ImageCard;