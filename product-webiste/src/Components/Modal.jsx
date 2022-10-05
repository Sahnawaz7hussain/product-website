import React from "react";
import "./modal.css";
export const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modalContainer" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{props.title}</h2>
        </div>
        <div className="modal-body">{props.children}</div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="closeButton">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
