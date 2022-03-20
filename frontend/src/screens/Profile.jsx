import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserProfile from '../components/UserProfile';
import '../styles/ProfileStyle.css';

const Profile = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="profile-container">
        <div className="profile-menu">
          <ul className="profile-navigations navigation-buttons">
            <li>
              <button className="profile-buttons" to="/">
                Register Hotel
              </button>
            </li>
            <li>
              <button className="profile-buttons" to="/">
                My Bookings
              </button>
            </li>
            <li>
              <button className="profile-buttons" to="/">
                Notifications
              </button>
            </li>
            <li>
              <button className="profile-buttons" to="/">
                Update Password
              </button>
            </li>
            <li>
              <button className="profile-buttons" to="/">
                Update Profile
              </button>
            </li>
            <li>
              <button className="profile-buttons" to="/">
                Users
              </button>
            </li>
            <li>
              <button className="profile-buttons" to="/">
                My Properties
              </button>
            </li>
            <li>
              <button className="profile-buttons" to="/">
                Enquiries
              </button>
            </li>
            <li>
              <button className="profile-buttons" to="/">
                Respopnses
              </button>
            </li>
            <li>
              <button className="profile-buttons" to="/">
                Help
              </button>
            </li>
          </ul>
        </div>
        <div className="profile-menu-items-actions">
          <UserProfile />
        </div>
      </div>
    </>
  );
};

export default Profile;
