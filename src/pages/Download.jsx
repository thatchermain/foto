import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Download.scss";

const Download = () => {
  return (
    <section className="download__wrapper container">
      <Row className="my-5 py-5">
        <h2 className="download__title"> POBIERZ PLIKI</h2>
        <Link
          className="download__link"
          to="/FORMULARZ-REKLAMACYJNY-2022.pdf"
          target="_blank"
          download
        >
          <strong>POBIERZ </strong>
          FORMULARZ REKLAMACYJNY
        </Link>
        <Link
          className="download__link"
          to="/Cennik-przegladow-instalacji-fotowoltaicznych-obowiazujacych-w-roku-2022.pdf"
          target="_blank"
          download
        >
          <strong>POBIERZ </strong>
          CENNIK PRZEGLĄDÓW INSTALACYJNYCH
        </Link>
      </Row>
    </section>
  );
};

export default Download;
