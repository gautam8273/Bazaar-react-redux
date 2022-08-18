import React from "react";
import ReactDOM from "react-dom";
const modalRoot = document.getElementById("modal-root");
const modal = (children) => {
    return ReactDOM.createPortal(
        <div className="modal">{children}</div>,
        modalRoot
    );
};

export default modal;