import React from "react";
import ReactMarkdown from "react-markdown";
import { useRouteData } from "react-static";

import { Link } from "../components/Router";

import "./privacy.scss";

export default () => {
  const routeData = useRouteData();
  const { translations } = routeData;

  return (
    <div className="privacy">
      <Link className="privacy__back" to="/">
        <i className="privacy__icon fa fa-angle-left" />
        <span>{translations.back}</span>
      </Link>
      <ReactMarkdown escapeHtml={false} source={translations.text} />
    </div>
  );
};
