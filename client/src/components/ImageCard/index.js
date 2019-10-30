import React, {useState} from "react";
import "./Card.css";
//import Modal from 'react-bootstrap/Modal';



function ImageCard ({thumbnail, title, name, medium, url, date, nationality, Button, handleFullSizeImage}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="card">
      <img src={thumbnail} alt="artwork" className="card-img" 
      onClick={(event) => {
        handleShow();
        return handleFullSizeImage(url, event);
      }}></img>
      <div className="card-list">
        <ul className="card-info">
          <li className="art_title">{title}</li>
          <li className="medium">{medium}</li>
          <li className="artist_name">{name}</li>
          <li className="art_date">{date}</li>
          <li className="nationality">{nationality}</li>
        </ul>
        <Button />
        {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal> */}
      </div>
    </div>
  );
}

export default ImageCard;