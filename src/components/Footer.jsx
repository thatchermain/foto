import React from "react";
import "../styles/Footer.scss";
import { Col, Row } from "react-bootstrap";
import FooterLogo from "../assets/images/footer-logo.png";
import Ministerstwo from "../assets/images/footer/ministerstwo.webp";
import TrzyPlus from "../assets/images/footer/zdr.webp";
import Karta from "../assets/images/footer/kdr.webp";
import Forum from "../assets/images/footer/pfk.webp";

const Footer = () => {
  return (
    <footer className="container-fluid pt-5 footer">
      <Row className="container m-auto">
        <Col className="footer-section">
          <h4 className="footer-section__heading">DANE FIRMOWE</h4>
          <ul className="footer-section__list">
            <li className="footer-section__item">
              <span className="footer-section__key">Nazwa Firmy:</span>
              <span className="footer-section__value">Solektro Sp. z o.o.</span>
            </li>
            <li className="footer-section__item">
              <span className="footer-section__key">Adres Siedziby:</span>
              <span className="footer-section__value">
                ul. Słowackiego 12, 33-100 Tarnów
              </span>
            </li>
            <li className="footer-section__item">
              <span className="footer-section__key">
                Adres do Korespondencji:
              </span>
              <span className="footer-section__value">
                Słowackiego 12, Tarnów
              </span>
            </li>
            <li className="footer-section__item">
              <span className="footer-section__key">NIP:</span>
              <span className="footer-section__value">9442263066</span>
            </li>
            <li className="footer-section__item">
              <span className="footer-section__key">REGON:</span>
              <span className="footer-section__value">382570320</span>
            </li>
          </ul>
        </Col>
        <Col className="footer-section">
          <h4 className="footer-section__heading">DANE KONT BANKOWYCH</h4>
          <ul className="footer-section__list">
            <li className="footer-section__item">
              <span className="footer-section__key">Konta Bankowe</span>
              <span className="footer-section__value">Alior Bank</span>
            </li>
            <li className="footer-section__item">
              <span className="footer-section__key">Rachunek pomocniczy</span>
              <span className="footer-section__value">
                46 2490 0005 0000 4600 8449 0672
              </span>
            </li>
            <li className="footer-section__item">
              <span className="footer-section__key">Rachunek główny</span>
              <span className="footer-section__value">
                52 2490 0005 0000 4530 3417 5738
              </span>
            </li>
            <li className="footer-section__item">
              <span className="footer-section__key">Bank Wykonawcy</span>
              <span className="footer-section__value">
                Alior Bank, Oddział Tarnów
              </span>
              <span className="footer-section__value">
                Nr rachunku: 94 2490 0005 0000 4600 6945 1413
              </span>
            </li>
          </ul>
        </Col>
        <Col>
          <ul className="footer-section__list footer-section__list-right">
            <li className="footer-section__item">
              <span className="footer-section__key">
                Jesteśmy uczestnikiem Programu
              </span>
            </li>
            <li className="footer-section__item footer-section__item-row">
              <span className="footer__color-span footer__color-span__red">
                RZETELNA
              </span>
              <span className="footer__color-span footer__color-span__white">
                Firma
              </span>
            </li>
            <li className="footer-section__item">
              <span className="footer-section__value">
                Sprawdź naszą rzetelność na
                <br />
                <a
                  href="https://rzetelnafirma.pl/4YCI7NKS"
                  className="footer-section__value"
                >
                  rzetelnafirma.pl
                </a>
              </span>
            </li>
            <li className="footer-section__item">
              <span className="footer-section__key">
                Natura Twoim źródłem energii
              </span>
            </li>
            <li className="footer-section__item">
              <div className="footer-section__logo">
                <img src={FooterLogo} alt="" />
              </div>
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="container m-auto footer__patron py-5">
        <Col>
          <div className="footer__patron__wrapper">
            <img src={Ministerstwo} alt="" />
          </div>
        </Col>
        <Col>
          <div className="footer__patron__wrapper">
            <img src={TrzyPlus} alt="" />
          </div>
        </Col>
        <Col>
          <div className="footer__patron__wrapper">
            <img src={Karta} alt="" />
          </div>
        </Col>
        <Col>
          <div className="footer__patron__wrapper">
            <img src={Forum} alt="" />
          </div>
        </Col>
      </Row>
      <Row className="container m-auto ">
        <p className="copyright">
          © 2020 Solektro.pl - Wszelkie prawa zastrzeżone. |
          <a
            href="https://rzetelnafirma.pl/4YCI7NKS"
            className="footer-section__value"
          >
            {" "}
            Polityka prywatności
          </a>
        </p>
      </Row>
    </footer>
  );
};

export default Footer;
