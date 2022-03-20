import React from 'react';
import logo from '../resources/HotelGRID.gif';
import { Link } from 'react-router-dom';
import '../styles/NavigationBarStyle.css';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();

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
          <input type="checkbox" className="nav-menu" id="nav-menu" />
          <ul className="navigation-buttons">
            <li>
              <Link to="/">Register Hotel</Link>
            </li>
            <li>
              <Link to="/">My Bookings</Link>
            </li>
            <li>
              <Link to="/">Notifications</Link>
            </li>
            <li>
              <Link to="/">Help</Link>
            </li>
            <li>
              <Link to="/profile">
                <i className="fa-solid fa-user"></i> Profile
              </Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li className="navigation-right-most-button">
              <Link to="/sign-up">Sign Up</Link>
            </li>
            <li className="navigation-right-most-button">
              <button onClick={(e) => navigate('/')}>Log Out</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
