import React from 'react';
import "../../src/App.css";

function Modal({ isOpen, onClose, content }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Modal;
