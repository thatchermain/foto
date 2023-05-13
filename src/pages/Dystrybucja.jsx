import React from "react";
import "../styles/sections.scss";
import { Link } from "react-router-dom";
import Warehouse from "../assets/images/dystrybucja/warehouse.jpeg";
import { Row } from "react-bootstrap";

const Dystrybucja = () => {
  return (
    <section className="container pt-5 section_margin-top px-5">
      <h2 className="article_h2">Dystrybucja</h2>
      <p className="section-paragraph__regular">
        Hurtownia najlepszych podzespołów do budowy instalacji fotowoltaicznych.
        Zapewniamy klientom{" "}
        <span>szeroki asortyment, w konkurencyjnych cenach.</span>
      </p>
      <p className="section-paragraph__regular">
        Ofertę kierujemy do firm montujących instalacje fotowoltaiczne zarówno
        do zastosowań domowych jak i przemysłowych.
      </p>
      <p className="section-paragraph__bold text-center">
        Dostarczamy kompletne zestawy PV jak i poszczególne komponenty takie
        jak:
      </p>
      <ul className="section-paragraph__regular">
        <li className="section-paragraph__regular">
          panele (moduły) fotowoltaiczne
        </li>
        <li className="section-paragraph__regular">inwertery (falowniki)</li>
        <li className="section-paragraph__regular">systemy mocowań</li>
        <li className="section-paragraph__regular">okablowanie</li>
      </ul>
      <p className="section-paragraph__regular">
        Współpracujemy z najlepszymi producentami na świecie, dzięki czemu
        dostarczamy towar zaawansowany technologicznie i w najlepszej jakości.
        Jeśli chcesz poznać szczegóły oferty skontaktuj się z nami:
      </p>
      <Link className="section-paragraph__color text-center">
        <p>dystrybucja@solektro.pl</p>
      </Link>
      <p className="section-paragraph__bold text-center">
        Dlaczego warto skorzystać z oferty Solektro <br />
        Dystrybucja?
      </p>
      <p className="section-paragraph__regular text-center">Szybka Dostawa</p>
      <p className="section-paragraph__regular text-center">
        Wygodne Płatności
      </p>
      <p className="section-paragraph__regular text-center">Najwyższa Jakość</p>
      <p className="section-paragraph__regular text-center">
        Konkurencyjne Ceny
      </p>
      <Row className="image py-5 my-5">
        <img src={Warehouse} alt="" />
      </Row>
    </section>
  );
};

export default Dystrybucja;
