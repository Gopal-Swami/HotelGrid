import React, { useEffect } from 'react';
import HotelCard from './HotelCard';

import { useDispatch, useSelector } from 'react-redux';
import { listTopHotels } from '../actions/hotelActions';
import Loader from '../components/Loader';
import '../styles/HotelCardStyle.css';

const TopHotels = () => {
  const dispatch = useDispatch();
  const topHotelsFromReducer = useSelector((state) => state.topHotelsList);
  const {
    loading: topHotelsLoading,
    error: topHotelsError,
    hotels: topHotels,
  } = topHotelsFromReducer;

  useEffect(() => {
    dispatch(listTopHotels());
  }, [dispatch]);

  return (
    <div className="top-hotels-at-landing-page">
      {topHotelsLoading ? (
        <Loader />
      ) : (
        topHotels.map(
          (hotel) =>
            !hotel.isBlocked && <HotelCard key={hotel._id} hotel={hotel} />
        )
      )}
    </div>
  );
};

export default TopHotels;
