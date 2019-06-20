import React, { useState } from "react";

import { Link } from "../Router";

import "./Header.scss";
import buildClassName from "../../helpers/buildClassName";

export default ({ translations }) => {

  const [open, setOpen] = useState(false);

  const { header } = translations;

  return (
    <nav className="header">
      <div className="header__logo-wrapper">
        <img className="header__logo" src="/img/logo.png" alt="Der Riegel Logo" />
      </div>
      <div className={buildClassName("header__nav-wrapper", { open })}>
        <Link className="header__item" to="/">{header.home}</Link>
        <Link className="header__item" to="/#ingredients">{header.ingredients}</Link>
        <Link className="header__item" to="/#about">{header.aboutus}</Link>
        <Link className="header__item" to="/#buy">{header.buy}</Link>
        <Link className="header__item" to="/#contact">{header.contact}</Link>
      </div>
      <div className="header__burger" onClick={() => setOpen(!open)}>
        <i className="fas fa-bars" />
      </div>
    </nav>
  );
}
