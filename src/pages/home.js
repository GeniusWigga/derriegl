import React from "react";
import ReactMarkdown from "react-markdown/with-html";

import { useRouteData } from "react-static";

import Layout from "../containers/Layout";

import "./home.scss";

export default () => {

  const routeData = useRouteData();
  const { translations } = routeData;

  return (
    <Layout {...routeData} className="home">
      <div className="home__hero">
        <img className="home__hero-img" src="/img/hero.jpg" alt="home hero" />
        <ReactMarkdown escapeHtml={false} className="home__hero-headline" source={translations.headline} />
      </div>
    </Layout>
  );
}
