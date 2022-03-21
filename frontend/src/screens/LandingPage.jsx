import React, { useEffect } from 'react';
import Citysearch from '../components/Citysearch';
import RoomType from '../components/RoomType';
import Search from '../components/Search';
import TopHotels from '../components/TopHotels';

const LandingPage = () => {
  return (
    <>
      <div className="parent-landing-page">
        <div className="landing-page-search-bar">
          <Search />
          <Citysearch />
          <RoomType />
          <TopHotels />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
