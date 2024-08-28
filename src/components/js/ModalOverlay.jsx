// ModalOverlay.js
import React from 'react';
import '../css/ModalOverlay.css';

function ModalOverlay({ imageSrc, alt, story, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <img src={imageSrc} alt={alt} />
        <p>{story}</p>
      </div>
    </div>
  );
}

export default ModalOverlay;
