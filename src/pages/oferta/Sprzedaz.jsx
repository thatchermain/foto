import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../styles/Oferta.scss";
import FormShort from "../../components/FormShort";

const Sprzedaz = () => {
  return (
    <article className="section container px-md-5 ">
      <Row className="mt-5 pt-5 px-md-5 text-center">
        <h2 className="section__title ">SPRZEDAŻ ENERGII</h2>
        <p className="section__description">
          Firma
          <strong>Solektro</strong>
          zajmuje się
          <strong>doradztwem energetycznym.</strong>
          Reprezentujemy największe zakłady/firmy energetyczne w Polsce.
          Pomagamy firmom zoptymalizować opłaty za energię elektryczną i
          dystrybucję. Działamy na terenie całego kraju, nie pobieramy żadnych
          opłat, każdy z naszych klientów podpisuje kontrakt bezpośrednio z
          zakładem energetycznym, co zapewnia
          <strong>gwarancję nieprzerwanych dostaw.</strong>
        </p>
        <p className="section__description">Zapraszamy do współpracy.</p>
        <h3 className="section__title-centered">SKONTAKTUJ SIĘ Z NAMI</h3>
      </Row>
      <Col className=" d-flex justify-content-center my-5 pb-5">
        <FormShort className="section__form" />
      </Col>
    </article>
  );
};

export default Sprzedaz;
