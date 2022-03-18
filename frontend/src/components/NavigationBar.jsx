import React from 'react';
import logo from '../resources/HotelGRID.gif';
import { Link } from 'react-router-dom';
import '../styles/NavigationBarStyle.css';

const NavigationBar = () => {
  return (
    <>
      <div className="navigation-container">
        <div className="navigation-logo">
          {/* <video autoPlay muted loop width={150}>
            <source src={logo} type="video/mp4" />
          </video> */}
          <img src={logo} alt="HotelGRID" id="logo" />
        </div>
        <div className="navigation-options">
          <label htmlFor="nav-menu" className="navigation-menu-wrapper">
            <i className="fa-solid fa-bars"></i>
          </label>
          <input
            type="checkbox"
            className="navigation-menu-wrapper"
            id="nav-menu"
          />
          <ul className="navigation-buttons">
            {/* <li>
              <Link to="/">
                <i className="fa-solid fa-user"></i> Profile
              </Link>
            </li>
            <li>
              <Link to="/" className="navigation-right-most-button">
                Log Out
              </Link>
            </li> */}
            <li>
              <Link to="/">Log In</Link>
            </li>
            <li>
              <Link to="/" className="navigation-right-most-button">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
