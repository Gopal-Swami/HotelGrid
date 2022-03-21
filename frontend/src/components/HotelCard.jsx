import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HotelCardStyle.css';

import hotelImage from '../resources/kolkata.jpg';
import Rating from './Rating';

const HotelCard = ({ hotel }) => {
  return (
    <>
      <Link to={`/hotels/${hotel._id}`} className="hotel-card">
        <div className="hotel-card-image">
          <img src={hotel.hotelPhotoUrl} alt="Hotel Name" />
        </div>
        <div className="hotel-card-details">
          <h1 className="hotel-card-title">
            {hotel.hotelName} , {hotel.address.city}
          </h1>
          <p>{hotel.hotelDescription}</p>
          <div className="hotel-card-rating">
            <Rating value={hotel.rating} />
          </div>
          <div className="hotel-card-actions">
            <Link to={`/hotels/${hotel._id}`}>View</Link>
          </div>
        </div>
      </Link>
    </>
  );
};

export default HotelCard;
