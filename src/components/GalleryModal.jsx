import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "../styles/Gallery.scss";
import ImageGallery from "react-image-gallery";
import "../styles/ImageGallery.scss";
import data from "../data/realizacje";

const GalleryModal = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        id={props.id}
        className="gallery"
      >
        <div className="gallery__wrapper">
          <div className="gallery__img">
            <img src={props.cover} alt="" />
          </div>
          <p className="gallery__place">{props.place}</p>
          <p className="gallery__watch">Zobacz zdjęcia realizacji</p>
        </div>
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        fullscreen={true}
      >
        <Modal.Header closeButton className="d-flex  bg-dark">
          <Modal.Title>{data.place}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex  bg-dark">
          <ImageGallery items={props.items} />
        </Modal.Body>
        <Modal.Footer className="d-flex  bg-dark">
          <Button variant="secondary" onClick={handleClose}>
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GalleryModal;
