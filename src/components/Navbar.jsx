import React, { useState } from "react";
import "../styles/Navbar.scss";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { TfiFacebook } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);

  return (
    <div className="navbar_fixed">
      <div className="navbar_container">
        <Link to="/">
          <div className="navbar_logo">
            <img src={Logo} alt="" />
          </div>
        </Link>
        {/* <div className={`navbar_menu ${isOpen ? "visible" : "hidden"}`}> */}
        <div className="navbar_menu">
          {/* <ul className="navbar_menu__list "> */}
          <ul
            className={`navbar_menu__list ${
              showMobile ? "navbar_menu__list visible" : "navbar_menu__list"
            }
          `}
          >
            <div
              className="mobile-nav-close-btn"
              onClick={() => setShowMobile(false)}
            >
              <GrClose />
            </div>
            <Link
              className="navbar_menu__item"
              to="/oferta"
              onClick={() => setShowMobile(false)}
            >
              Oferta
            </Link>
            <Link
              className="navbar_menu__item"
              to="/dystrybucja"
              onClick={() => setShowMobile(false)}
            >
              Dystrybucja
            </Link>
            <Link
              className="navbar_menu__item"
              to="/oferty_pracy"
              onClick={() => setShowMobile(false)}
            >
              Oferty pracy
            </Link>
            <Link
              className="navbar_menu__item"
              to="/realizacje"
              onClick={() => setShowMobile(false)}
            >
              Realizacje
            </Link>
            <Link
              className="navbar_menu__item"
              to="/blog"
              onClick={() => setShowMobile(false)}
            >
              Blog
            </Link>
            <Link
              className="navbar_menu__item"
              to="/do_pobrania"
              onClick={() => setShowMobile(false)}
            >
              Do pobrania
            </Link>
            <Link
              className="navbar_menu__item"
              to="/kontakt"
              onClick={() => setShowMobile(false)}
            >
              Kontakt
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
        <div className="mobile-nav-btn" onClick={() => setShowMobile(true)}>
          <HiOutlineBars3 />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
