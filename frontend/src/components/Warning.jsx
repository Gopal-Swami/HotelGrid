import React from 'react';
import '../styles/UtilsStyle.css';

const Warning = () => {
  const warn = '#F4DB7D';
  const danger = '#FF6A3D';
  const success = '#519259';
  return (
    <div style={{ background: warn }} className="warning-message-container">
      <div className="warning-title">
        Alert
        <span>
          <i class="fa-solid fa-xmark"></i>
        </span>
      </div>
      <p className="warning-message">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
        doloribus.
      </p>
      <div className="warning-actions">
        <button className="accept-warning">Accept</button>
        <button className="close-warning">Cancel</button>
      </div>
    </div>
  );
};

export default Warning;
