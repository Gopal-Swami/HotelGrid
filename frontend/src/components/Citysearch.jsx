import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CitysearchStyle.css';

const Citysearch = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Top Cities</h1>
      <div className="city-search-container">
        <Link to="/" className="city-card city-1">
          <span>KOLKATA</span>
        </Link>
        <Link to="/" className="city-card city-2">
          <span>MUMBAI</span>
        </Link>
        <Link to="/" className="city-card city-3">
          <span>PUNE</span>
        </Link>
        <Link to="/" className="city-card city-4">
          <span>DELHI</span>
        </Link>
      </div>
    </>
  );
};

export default Citysearch;
