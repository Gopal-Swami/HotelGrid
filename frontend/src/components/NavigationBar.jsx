import React from 'react';
import logo from '../resources/HotelGRID.gif';
import { Link } from 'react-router-dom';
import '../styles/NavigationBarStyle.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
const NavigationBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const logOutUser = () => {
    dispatch(logout());
    navigate('/');
  };
  return (
    <>
      <div className="navigation-container">
        <div className="navigation-logo">
          <img src={logo} alt="HotelGRID" id="logo" />
        </div>
        <div className="navigation-options">
          <label htmlFor="nav-menu" className="navigation-menu-wrapper">
            <i className="fa-solid fa-bars"></i>
          </label>
          <input type="checkbox" className="nav-menu" id="nav-menu" />
          <ul className="navigation-buttons">
            {!userInfo ? (
              <>
                <li>
                  <Link to="/login">Log In</Link>
                </li>
                <li className="navigation-right-most-button">
                  <Link to="/sign-up">Sign Up</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/profile">
                    <i className="fa-solid fa-user"></i> Profile
                  </Link>
                </li>

                <li className="navigation-right-most-button">
                  <button onClick={logOutUser}>Log Out</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
