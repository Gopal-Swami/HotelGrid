import React, { useEffect, useState } from 'react';
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
  const [activeTab, setActiveTab] = useState('profile');
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
            {userInfo.user.isOwner || userInfo.user.isAdmin ? (
              <>
                <li>
                  <button
                    className="profile-buttons"
                    onClick={(e) => setActiveTab('registerhotel')}
                  >
                    Register Hotel
                  </button>
                </li>

                <li>
                  <button
                    className="profile-buttons"
                    onClick={(e) => setActiveTab('myproperties')}
                  >
                    My Properties
                  </button>
                </li>

                <li>
                  <button
                    className="profile-buttons"
                    onClick={(e) => setActiveTab('enquiries')}
                  >
                    Enquiries
                  </button>
                </li>
                <li>
                  <button
                    className="profile-buttons"
                    onClick={(e) => setActiveTab('responses')}
                  >
                    Respopnses
                  </button>
                </li>
              </>
            ) : (
              ''
            )}
            <li>
              <button
                className="profile-buttons"
                onClick={(e) => setActiveTab('mybookings')}
              >
                My Bookings
              </button>
            </li>
            <li>
              <button
                className="profile-buttons"
                onClick={(e) => setActiveTab('notifications')}
              >
                Notifications
              </button>
            </li>
            <li>
              <button
                className="profile-buttons"
                onClick={(e) => setActiveTab('profile')}
              >
                Update Profile
              </button>
            </li>

            {userInfo.user.isAdmin ? (
              <>
                <li>
                  <button
                    className="profile-buttons"
                    onClick={(e) => setActiveTab('users')}
                  >
                    Users
                  </button>
                </li>
              </>
            ) : (
              ''
            )}
            <li>
              <button
                className="profile-buttons"
                onClick={(e) => setActiveTab('help')}
              >
                Help
              </button>
            </li>
          </ul>
        </div>
        <div className="profile-menu-items-actions">
          {activeTab === 'profile' && <UserProfile />}
          {activeTab === 'mybookings' && <Bookings />}
          {activeTab === 'notifications' && <Notifications />}
          {activeTab === 'users' && <Users />}
          {activeTab === 'myproperties' && <MyProperties />}
          {activeTab === 'enquiries' && <Enquiries />}
          {activeTab === 'responses' && <Responses />}
          {activeTab === 'help' && <Help />}
          {activeTab === 'registerhotel' && <RegisterHotel />}
        </div>
      </div>
    </>
  );
};

export default Profile;
