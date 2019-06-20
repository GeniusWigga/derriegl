import React from "react";

import Header from "../components/Header/Header";

export default (props) => {

  const { className, children, translations } = props;

  return (
    <div className={className}>
      <Header translations={translations} />
      {children}
    </div>
  );
}
