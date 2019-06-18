import React from "react";
import { useSiteData } from "react-static";

import { Link } from "./Router";

export default () => {

  const { menu } = useSiteData();

  return (
    <nav className="menu ">
      <Link to="/">{menu.home}</Link>
      <Link to="/about">{menu.ingredients}</Link>
    </nav>
  );
}
