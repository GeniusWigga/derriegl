import React from "react";

import { Link } from "../Router";

import "./Header.scss";

export default ({ translations }) => {
  const { header } = translations;

  return (
    <nav className="header">
      <div className="header__logo-wrapper">
        <img className="header__logo" src="/img/logo.png" alt="Der Riegel Logo" />
      </div>
      <Link className="header__item" to="/">{header.home}</Link>
      <Link className="header__item" to="/#ingredients">{header.ingredients}</Link>
      <Link className="header__item" to="/#about">{header.aboutus}</Link>
      <Link className="header__item" to="/#buy">{header.buy}</Link>
      <Link className="header__item" to="/#contact">{header.contact}</Link>

      <div className="header__burger">
        <i className="fas fa-bars" />
      </div>
    </nav>
  );
}
