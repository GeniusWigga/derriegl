import React from "react";

import Header from "../components/Header/Header";

export default (props) => {

  const { children, translations } = props;

  return (
    <div>
      <Header translations={translations} />
      {children}
    </div>
  );
}
