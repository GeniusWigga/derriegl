import React from "react";

import { Link } from "../Router";

import "./Header.scss";

export default ({ translations }) => {
  const { header } = translations;

  return (
    <nav className="header">
      <Link className="header__item" to="/">{header.home}</Link>
      <Link className="header__item" to="/about">{header.ingredients}</Link>
    </nav>
  );
}
