import React from 'react';
import signupImage from '../resources/Signup.svg';
import { Link } from 'react-router-dom';
import '../styles/SignupStyle.css';

const Signup = () => {
  return (
    <>
      <div className="sign-up-form-wrapper">
        <div className="sign-up-container">
          <div className="sign-up-image-container">
            <h1>Sign Up</h1>
            <img src={signupImage} alt="Sign Up Page" />
          </div>
          <div className="sign-up-form-container">
            <div className="sign-up-form">
              <input
                type="text"
                placeholder="First Name"
                className="signup-firstName"
                id="firstName"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="signup-lastName"
                id="lastName"
              />
              <input
                type="email"
                placeholder="Email"
                className="signup-email"
                id="email"
              />
              <input
                type="number"
                placeholder="Mobile"
                className="signup-mobile"
                id="mobile"
              />
              <input
                type="password"
                placeholder="Password"
                className="signup-password"
                id="password"
              />
              <input
                type="text"
                placeholder="Confirm Password"
                className="signup-cnf-password"
                id="cnf-password"
              />
              <button className="sign-up-btn" id="sign-up-btn">
                Sign Up
              </button>
              <Link to="/">Log In</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
