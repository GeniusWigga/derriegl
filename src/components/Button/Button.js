import React from "react";

import "./Button.scss";
import buildClassName from "../../helpers/buildClassName";

export default (props) => {

  const { className, children } = props;

  const classes = buildClassName("button", null, className);

  return (
    <button className={classes}>{children}</button>
  );
}
