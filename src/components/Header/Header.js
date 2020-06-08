import React, { useState } from "react";

// Do not remove router
import Router from "../Router";

import "./Header.scss";
import buildClassName from "../../helpers/buildClassName";

export default ({ translations }) => {
  const [open, setOpen] = useState(false);

  const { header } = translations;

  let hash = "";

  if (window) {
    hash = _.chain(window.location.href)
      .split("#")
      .nth(1)
      .value();
  }

  const close = () => setOpen(false);

  return (
    <nav className="header">
      <a href="/" className="header__logo-wrapper">
        <img className="header__logo" src="/img/logo-600px.png" alt="Der Riegel Logo" />
      </a>
      <div className={buildClassName("header__nav-wrapper", { open })}>
        <a
          className={buildClassName("header__item", { active: hash === "home" || !hash })}
          onClick={close}
          href="/#home"
        >
          {header.home}
        </a>
        <a
          className={buildClassName("header__item", { active: hash === "ingredients" })}
          onClick={close}
          href="/#ingredients"
        >
          {header.ingredients}
        </a>
        <a className={buildClassName("header__item", { active: hash === "about" })} onClick={close} href="/#about">
          {header.aboutus}
        </a>
        <a className={buildClassName("header__item", { active: hash === "buy" })} onClick={close} href="/#buy">
          {header.buy}
        </a>
        <a className={buildClassName("header__item", { active: hash === "contact" })} onClick={close} href="/#contact">
          {header.contact}
        </a>
        <a
          onClick={close}
          className={buildClassName("header__item", { active: hash === "products" })}
          href="https://derriegel.myshopify.com"
        >
          {header.products}
        </a>
      </div>
      <div className="header__burger" onClick={() => setOpen(!open)}>
        <i className="fas fa-bars" />
      </div>
    </nav>
  );
};
