import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Bookings from '../components/Bookings';
import Enquiries from '../components/Enquiries';
import MyProperties from '../components/MyProperties';
import Notifications from '../components/Notifications';
import Responses from '../components/Responses';
import UserProfile from '../components/UserProfile';
import Users from '../components/Users';
import Help from '../components/Help';
import '../styles/ProfileStyle.css';
import RegisterHotel from './RegisterHotel';
import Warning from '../components/Warning';
import Loader from '../components/Loader';
import { useSelector } from 'react-redux';

const Profile = () => {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  return (
    <>
      <div className="profile-container">
        <div className="profile-menu">
          <ul className="profile-navigations navigation-buttons">
            {userInfo.isOwner ? (
              <>
                <li>
                  <button className="profile-buttons" to="/">
                    Register Hotel
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
              </>
            ) : (
              ''
            )}
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
            {userInfo.isAdmin ? (
              <>
                <li>
                  <button className="profile-buttons" to="/">
                    Users
                  </button>
                </li>
              </>
            ) : (
              ''
            )}
            <li>
              <button className="profile-buttons" to="/">
                Update Profile
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
          {/* <Bookings /> */}
          {/* <Notifications /> */}
          {/* <Users /> */}
          {/* <MyProperties /> */}
          {/* <Enquiries /> */}
          {/* <Responses /> */}
          {/* <Help /> */}
          {/* <RegisterHotel /> */}
        </div>
      </div>
    </>
  );
};

export default Profile;
