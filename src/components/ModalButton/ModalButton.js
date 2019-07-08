import React, { Fragment, useState } from "react";
import ReactModal from "react-responsive-modal";
import _ from "lodash";

import Button from "../Button/Button";
import buildClassName from "../../helpers/buildClassName";

const ModalButton = ({ buttonContent, children, type, buttonClassName }) => {
  const [modal, onOpenModal] = useState({});
  const buttonClasses = buildClassName("modal-button", null, buttonClassName);

  console.log("modal: ", modal);

  return (
    <Fragment>
      <Button onClick={() => onOpenModal({ [type]: true })} className={buttonClasses}>{buttonContent}</Button>
      <ReactModal open={_.get(modal, type, false)} onClose={() => onOpenModal({})} center>
        {children}
      </ReactModal>
    </Fragment>
  );
};

export default ModalButton;
