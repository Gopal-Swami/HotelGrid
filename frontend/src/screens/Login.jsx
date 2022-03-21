import React, { useEffect, useState } from 'react';
import loginImage from '../resources/login.svg';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/SignupStyle.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';
import Loader from '../components/Loader';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginUser = () => {
    if (email === '') {
      alert('Please provide email');
    } else if (password === '') {
      alert('Please provide password');
    } else {
      dispatch(login(email, password));
    }
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [dispatch, userInfo, navigate]);

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
              <h3>{error && error}</h3>
              <input
                type="email"
                placeholder="Email"
                className="signup-email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                className="signup-password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                onClick={loginUser}
                className="sign-up-btn"
                id="sign-up-btn"
              >
                {loading ? <Loader /> : 'Log In'}
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
