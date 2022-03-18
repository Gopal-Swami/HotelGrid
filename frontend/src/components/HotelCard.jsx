import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HotelCardStyle.css';

import hotelImage from '../resources/kolkata.jpg';

const HotelCard = () => {
  return (
    <>
      <Link to="/" className="hotel-card">
        <div className="hotel-card-image">
          <img src={hotelImage} alt="Hotel Name" />
        </div>
        <div className="hotel-card-details">
          <h1 className="hotel-card-title">New Taj Hotel, Kolkata</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            repudiandae sed praesentium placeat minima eaque iste neque cumque
            possimus sint.
          </p>
          <div className="hotel-card-rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <i class="fa-solid fa-star" style={{ color: 'gray' }}></i>
          </div>
          <div className="hotel-card-actions">
            <Link to="/">View</Link>
          </div>
        </div>
      </Link>
    </>
  );
};

export default HotelCard;
