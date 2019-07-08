import React from "react";

import "./Button.scss";
import buildClassName from "../../helpers/buildClassName";

export default (props) => {

  const { className, children, onClick } = props;

  const classes = buildClassName("button", null, className);

  return (
    <button onClick={onClick} className={classes}>{children}</button>
  );
}
