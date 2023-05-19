import React from "react";
import { Col, Row } from "react-bootstrap";
import "../styles/Kontakt.scss";

const Kontakt = () => {
  return (
    <section className="kontakt__wrapper container">
      <Row className="my-5 py-5">
        <Col lg={8}>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1812.7844082594963!2d20.980698128167518!3d50.017647086917414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d833ffd780cf1%3A0x177edeea8f4229f1!2sSolektro!5e0!3m2!1sen!2spl!4v1684498198219!5m2!1sen!2spl"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </Col>
        <Col>
          <p className="kontakt__info-bold">SKONTAKTUJ SIĘ Z NAMI</p>
          <p className="kontakt__info-bold-small">Telefon:</p>
          <p className="kontakt__info-color">+48 572 193 930</p>
          <p className="kontakt__info-bold-small">E-mail:</p>
          <p className="kontakt__info-color">biuro@solektro.pl</p>
          <p className="kontakt__info-bold">ADRES BIURA</p>
          <p className="kontakt__info-regular">
            ul. Słowackiego 12 <br /> 33 – 100 Tarnów
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default Kontakt;
