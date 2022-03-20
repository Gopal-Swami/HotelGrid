import React from 'react';
import Filter from '../components/Filter';
import '../styles/SearchResultsStyle.css';
import { Link } from 'react-router-dom';
import HotelCard from '../components/HotelCard';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import Pagination from '@mui/material/Pagination';
const SearchResult = () => {
  return (
    <div className="search-result-container">
      <div className="search-result-title">
        <Link to="/">Back</Link>
        <h1>Showing Results For Kolkata</h1>
        <label htmlFor="filters" className="filters-menu-wrapper">
          <FilterAltIcon />
        </label>
      </div>
      <div className="search-result-body">
        <input type="checkbox" id="filters" className="filters" />
        <div className="search-result-filter-container">
          <Filter />
        </div>
        <div className="search-results">
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <Pagination
            count={10}
            variant="outlined"
            shape="rounded"
            style={{ padding: '2rem' }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
