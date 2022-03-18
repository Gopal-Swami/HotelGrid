import React from 'react';
import Citysearch from '../components/Citysearch';
import RoomType from '../components/RoomType';
import Search from '../components/Search';

const LandingPage = () => {
  return (
    <>
      <div className="parent-landing-page">
        <div className="landing-page-search-bar">
          <Search />
          <Citysearch />
          <RoomType />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
