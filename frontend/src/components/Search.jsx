import React from 'react';
import search_user from '../resources/homepageSearch.svg';
import '../styles/SearchStyle.css';

const Search = () => {
  return (
    <>
      <div className="search-container">
        <div className="left-search-container">
          <h1>Find your next stay.....</h1>
          <input
            type="text"
            className="search-city"
            id="search-city"
            placeholder="City.."
          />
          <label htmlFor="check-in-date">Check-In-Date</label>
          <input type="date" className="check-in-date" id="check-in-date" />
          <label htmlFor="check-out-date">Check-Out-Date</label>

          <input type="date" className="check-out-date" id="check-out-date" />
          <input type="number" className="no-of-rooms" placeholder="Rooms" />
          <button className="search-hotel-button">Search</button>
        </div>
        <div className="right-search-container">
          <img src={search_user} alt="" />
        </div>
      </div>
    </>
  );
};

export default Search;
