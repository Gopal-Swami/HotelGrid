import React from 'react';
import HotelCard from './HotelCard';

import '../styles/HotelCardStyle.css';

const TopHotels = () => {
  return (
    <div className="top-hotels-at-landing-page">
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
      <HotelCard />
    </div>
  );
};

export default TopHotels;
