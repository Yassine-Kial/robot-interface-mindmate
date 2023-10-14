import React from 'react';

function Modal({ onClose, children }) {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-content">
          {children}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
