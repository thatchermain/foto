import React from "react";
import "../styles/Realizacje.scss";
import "../styles/Gallery.scss";

import { Col, Row } from "react-bootstrap";

import data from "../data/realizacje";

import "../styles/ImageGallery.scss";
import GalleryModal from "../components/GalleryModal";

const Realizacje = () => {
  return (
    <section className="realizacje__wrapper container">
      <Row className="wrapper text-center">
        {data.map((item) => {
          return (
            <Col lg={4} key={item.id}>
              <GalleryModal
                items={item.photos}
                id={item.id}
                place={item.place}
                cover={item.cover}
              ></GalleryModal>
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default Realizacje;
