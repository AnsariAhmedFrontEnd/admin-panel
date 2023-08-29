import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import './Modal.css';

const ModalBackdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};

const ModalOverLay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const modalRoot = document.getElementById("modal-root");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<ModalBackdrop  onClose={props.onBackdropClick} />, modalRoot)}
      {ReactDOM.createPortal(<ModalOverLay >{props.children}</ModalOverLay>, modalRoot)}
    </Fragment>
  );
};

export default Modal;
