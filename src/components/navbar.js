import React, { useEffect } from "react";
import logo from "../img/logo final.png";
import ceth from "../img/Logo Ceth.jpg";
import latino from "../img/logo Latino.jpg";
import univic from "../img/logo univic (2).jpg";
import { BiUserCircle } from "react-icons/bi";

const navbar = () => {
  return (
    <nav
      className="navbar nav__list navbar-light fluid bg-light justify-content-between"
      id="navbar"
    >
      <a className="navbar-brand" href="/">
        <img
          src={logo}
          width="30"
          className="d-inline-block align-top logo nav__item"
          alt=""
        />
        <img
          src={ceth}
          width="10"
          className="d-inline-block align-top logo nav__item"
          alt=""
        />
        <img
          src={latino}
          width="60"
          className="d-inline-block align-top latino nav__item"
          alt=""
        />
        <img
          src={univic}
          width="45"
          className="d-inline-block align-top univic nav__item"
          alt=""
        />
      </a>
      <div className="col-md-1">
        <BiUserCircle className="usuario" />
      </div>
    </nav>
  );
};

export default navbar;
