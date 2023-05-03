import React from "react";
import "../styles/Navbar.scss";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { TfiFacebook } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar_fixed">
      <div className="navbar_container">
        <Link to="/">
          <div className="navbar_logo">
            <img src={Logo} alt="" />
          </div>
        </Link>
        <div className="navbar_menu">
          <ul className="navbar_menu__list">
            <Link className="navbar_menu__item" to="/oferta">
              OFERTA
            </Link>
            <Link className="navbar_menu__item" to="/dystrybucja">
              DYSTRYBUCJA
            </Link>
            <Link className="navbar_menu__item" to="/oferty_pracy">
              OFERTY PRACY
            </Link>
            <Link className="navbar_menu__item" to="/realizacje">
              REALIZACJE
            </Link>
            <Link className="navbar_menu__item" to="/blog">
              BLOG
            </Link>
            <Link className="navbar_menu__item" to="/do_pobrania">
              DO POBRANIA
            </Link>
            <Link className="navbar_menu__item" to="/kontakt">
              KONTAKT
            </Link>
          </ul>
        </div>
        <div className="navbar_social">
          <Link
            className="navbar_social__item"
            to="https://www.facebook.com/Solektro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TfiFacebook className="navbar_social__icon" />
          </Link>
          <Link
            className="navbar_social__item"
            to="https://www.instagram.com/solektro.pl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className="navbar_social__icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
