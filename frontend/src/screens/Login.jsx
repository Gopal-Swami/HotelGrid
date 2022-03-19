import React from 'react';
import loginImage from '../resources/login.svg';
import { Link } from 'react-router-dom';
import '../styles/SignupStyle.css';

const Login = () => {
  return (
    <>
      <div className="sign-up-form-wrapper">
        <div className="sign-up-container">
          <div className="sign-up-image-container">
            <h1>Log In</h1>
            <img src={loginImage} alt="Sign Up Page" />
          </div>
          <div className="sign-up-form-container">
            <div className="sign-up-form">
              <input
                type="email"
                placeholder="Email"
                className="signup-email"
                id="email"
              />

              <input
                type="password"
                placeholder="Password"
                className="signup-password"
                id="password"
              />

              <button className="sign-up-btn" id="sign-up-btn">
                Log In
              </button>
              <Link to="/">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
