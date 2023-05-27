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
      <Row className="wrapper  d-flex justify-content-around ">
        {data.map((item) => {
          return (
            <Col lg={3} md={5} key={item.id} className=" mx-lg-5">
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
