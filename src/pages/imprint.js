import React from "react";
import ReactMarkdown from "react-markdown";
import { useRouteData } from "react-static";

import { Link } from "../components/Router";

import "./imprint.scss";

const Imprint = () => {
  const routeData = useRouteData();
  const { translations } = routeData;

  console.log("translations: ", translations);

  return (
    <div className="imprint">
      <Link className="imprint__back" to="/">
        <i className="imprint__icon fa fa-angle-left" />
        <span>{translations.back}</span>
      </Link>
      <ReactMarkdown escapeHtml={false} source={translations.text} />
    </div>
  );
};

export default Imprint;
