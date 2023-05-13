import React from "react";
import "../styles/Oferta.scss";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Instalacje from "../assets/images/oferta/instalacje.jpg";
import Pompy from "../assets/images/oferta/pompy.jpg";
import Piece from "../assets/images/oferta/piece.png";
import Ladowarki from "../assets/images/oferta/ladowarki.png";
import Magazyny from "../assets/images/oferta/magazyny.png";
import Sprzedaz from "../assets/images/oferta/sprzedaz.png";
import { MdPlayArrow } from "react-icons/md";

const Oferta = () => {
  return (
    <section className="container pt-5 section_margin-top">
      <Row className="text-center">
        <h4 className="article_h4">NASZA OFERTA</h4>
        <h2 className="article_h2">Najlepsze Systemy</h2>
      </Row>
      <Row lg={3} md={2} xs={1} className=" py-5 gy-4 px-5 ">
        <Col className="">
          <Link className="image_wrapper image_wrapper__no-overlay">
            <div>
              <img src={Instalacje} alt="" />
            </div>
            <div className="offer-details">
              <div className="offer-details__name">
                Instalacje fotowoltaiczne
              </div>
              <button className="offer-details__btn">
                POZNAJ SZCZEGÓŁY{" "}
                <MdPlayArrow className="offer-details__btn-icon" />
              </button>
            </div>
          </Link>
        </Col>
        <Col className="">
          <Link className="image_wrapper image_wrapper__no-overlay">
            <div>
              <img src={Pompy} alt="" />
            </div>
            <div className="offer-details">
              <div className="offer-details__name">Pompy ciepła</div>
              <button className="offer-details__btn">
                POZNAJ SZCZEGÓŁY{" "}
                <MdPlayArrow className="offer-details__btn-icon" />
              </button>
            </div>
          </Link>
        </Col>
        <Col className="">
          <Link className="image_wrapper image_wrapper__no-overlay">
            <div>
              <img src={Piece} alt="" />
            </div>
            <div className="offer-details">
              <div className="offer-details__name">Piece jonowe</div>
              <button className="offer-details__btn">
                POZNAJ SZCZEGÓŁY{" "}
                <MdPlayArrow className="offer-details__btn-icon" />
              </button>
            </div>
          </Link>
        </Col>
        <Col className="">
          <Link className="image_wrapper image_wrapper__no-overlay">
            <div>
              <img src={Ladowarki} alt="" />
            </div>
            <div className="offer-details">
              <div className="offer-details__name">Ładowarki samochodowe</div>
              <button className="offer-details__btn">
                POZNAJ SZCZEGÓŁY{" "}
                <MdPlayArrow className="offer-details__btn-icon" />
              </button>
            </div>
          </Link>
        </Col>
        <Col className="">
          <Link className="image_wrapper image_wrapper__no-overlay">
            <div>
              <img src={Magazyny} alt="" />
            </div>
            <div className="offer-details">
              <div className="offer-details__name">Magazyny energii</div>
              <button className="offer-details__btn">
                POZNAJ SZCZEGÓŁY{" "}
                <MdPlayArrow className="offer-details__btn-icon" />
              </button>
            </div>
          </Link>
        </Col>
        <Col className="">
          <Link className="image_wrapper image_wrapper__no-overlay">
            <div>
              <img src={Sprzedaz} alt="" />
            </div>
            <div className="offer-details">
              <div className="offer-details__name">Sprzedaż energii</div>
              <button className="offer-details__btn">
                POZNAJ SZCZEGÓŁY{" "}
                <MdPlayArrow className="offer-details__btn-icon" />
              </button>
            </div>
          </Link>
        </Col>
      </Row>
    </section>
  );
};

export default Oferta;
