import React from "react";
import "./Card.css";

function ImageCard ({thumbnail, title, name, medium, url, date, nationality, Button}) {
  return (
    <div className="card">
      <img src={thumbnail} alt="artwork" className="card-img" 
       ></img>
      <div className="card-list">
        <ul className="card-info">
          <li className="art_title">{title}</li>
          <li className="medium">{medium}</li>
          <li className="artist_name">{name}</li>
          <li className="art_date">{date}</li>
          <li className="nationality">{nationality}</li>
          <li className="url"><a href={url} target="_blank" rel="noopener noreferrer">More Info</a></li>
        </ul>
        <Button />
      </div>
    </div>
  );
}

export default ImageCard;