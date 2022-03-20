import React from 'react';

import { Link } from 'react-router-dom';
import '../styles/CitysearchStyle.css';

const RoomType = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Room Space</h1>
      <div className="room-type-search-container">
        <Link to="/" className="room-card room-1">
          <span>SINGLE</span>
        </Link>
        <Link to="/" className="room-card room-2">
          <span>DOUBLE</span>
        </Link>
        <Link to="/" className="room-card room-3">
          <span>TRIPLE</span>
        </Link>
        <Link to="/" className="room-card room-4">
          <span>LUXURY</span>
        </Link>
      </div>
    </>
  );
};

export default RoomType;
