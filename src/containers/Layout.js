import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default (props) => {

  const { className, children, translations } = props;

  return (
    <div className={className}>
      <Header translations={translations} />
      {children}
      <Footer translations={translations} />
    </div>
  );
}
