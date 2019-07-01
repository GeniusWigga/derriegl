import React, { useState } from "react";
import Router from "../Router";

import "./Header.scss";
import buildClassName from "../../helpers/buildClassName";

export default ({ translations }) => {

  const [open, setOpen] = useState(false);

  const { header } = translations;

  let hash = "";

  if (window) {
    hash = _.chain(window.location.href).split("#").nth(1).value();
  }

  return (
    <nav className="header">
      <div className="header__logo-wrapper">
        <img className="header__logo" src="/img/logo.png" alt="Der Riegel Logo" />
      </div>
      <div className={buildClassName("header__nav-wrapper", { open })}>
        <a className={buildClassName("header__item", { active: hash === "home" || !hash })} href="/#home">{header.home}</a>
        <a className={buildClassName("header__item", { active: hash === "ingredients" })} href="/#ingredients">{header.ingredients}</a>
        <a className={buildClassName("header__item", { active: hash === "about" })} href="/#about">{header.aboutus}</a>
        <a className={buildClassName("header__item", { active: hash === "buy" })} href="/#buy">{header.buy}</a>
        <a className={buildClassName("header__item", { active: hash === "contact" })}  href="/#contact">{header.contact}</a>
      </div>
      <div className="header__burger" onClick={() => setOpen(!open)}>
        <i className="fas fa-bars" />
      </div>
    </nav>
  );
}
