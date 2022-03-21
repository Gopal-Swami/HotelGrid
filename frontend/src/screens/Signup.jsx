import React, { useEffect, useState } from 'react';
import signupImage from '../resources/Signup.svg';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/SignupStyle.css';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import Loader from '../components/Loader';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [cnfPassword, setCnfPassword] = useState('');

  const userRegistration = useSelector((state) => state.userRegister);
  const { loading, error, success, userInfo } = userRegistration;

  const registerUser = () => {
    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      phoneNumber === '' ||
      password === '' ||
      cnfPassword === ''
    ) {
      alert('Please Fill All The Fields');
    } else if (password !== cnfPassword) {
      alert('Password Does not Match');
    } else {
      const data = new FormData();
      data.append('firstName', firstName);
      data.append('lastName', lastName);
      data.append('email', email);
      data.append('phoneNumber', phoneNumber);
      data.append('password', password);
      dispatch(register(data));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [dispatch, navigate, userInfo]);

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
              <h3>{error && error}</h3>
              <input
                type="text"
                placeholder="First Name"
                className="signup-firstName"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="signup-lastName"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="signup-email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                placeholder="Mobile"
                className="signup-mobile"
                id="mobile"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="signup-password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="text"
                placeholder="Confirm Password"
                className="signup-cnf-password"
                id="cnf-password"
                value={cnfPassword}
                onChange={(e) => setCnfPassword(e.target.value)}
              />
              <button
                onClick={registerUser}
                className="sign-up-btn"
                id="sign-up-btn"
              >
                {loading ? <Loader /> : success ? 'Registered' : 'Sign Up'}
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
