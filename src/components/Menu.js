import React from "react";
import { useRouteData } from "react-static";

import { Link } from "./Router";

export default () => {

  const routeData = useRouteData();

  console.log("routeData: ", routeData);

  return (
    <nav className="menu ">
      <Link to="/">Test</Link>
      <Link to="/about">Ingredients</Link>
    </nav>
  );
}
