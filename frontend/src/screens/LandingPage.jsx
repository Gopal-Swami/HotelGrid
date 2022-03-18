import React from 'react';
import Search from '../components/Search';

const LandingPage = () => {
  return (
    <>
      <div className="parent-landing-page">
        <div className="landing-page-search-bar">
          <Search />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
