import React, { useEffect, useState } from 'react';
import '../styles/ProfileStyle.css';
import { useSelector, useDispatch } from 'react-redux';
import Loader from './Loader';
import { updateUserProfile } from '../actions/userActions';

const UserProfile = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const updatedUser = useSelector((state) => state.updateUser);
  const { loading: updateLoading, error: updateError, success } = updatedUser;
  const { loading, error, userInfo } = userLogin;
  const [firstName, setFirstName] = useState('');
  const [enableNess, setEnableNess] = useState(true);
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalcode] = useState('');
  const [profileUrl, setProfileUrl] = useState(null);
  const [tempProfile, setTempProfile] = useState('');

  const enableFields = () => {
    setEnableNess(false);
  };

  const updateUser = () => {
    if (
      firstName === '' ||
      enableNess === '' ||
      lastName === '' ||
      email === '' ||
      phoneNumber === '' ||
      street === '' ||
      city === '' ||
      state === '' ||
      country === '' ||
      postalCode === ''
    ) {
      alert(
        'Please provide all fields including address To find hotels near you'
      );
    } else {
      const data = new FormData();
      data.append('firstName', firstName);
      data.append('lastName', lastName);
      data.append('email', email);
      data.append('phoneNumber', phoneNumber);
      if (password === newPassword) {
        data.append('password', password);
      } else {
        alert('Password Does Not Match');
      }
      data.append('addressline1', street);
      data.append('city', city);
      data.append('state', state);
      data.append('country', country);
      data.append('postalCode', postalCode);
      data.append('file', profileUrl);
      dispatch(updateUserProfile(data));
    }
  };

  useEffect(() => {
    const setValuesToProfileFields = () => {
      if (userInfo) {
        setFirstName(userInfo.user.firstName);
        setLastName(userInfo.user.lastName);
        setEmail(userInfo.user.email);
        setPhoneNumber(userInfo.user.phoneNumber);
        setProfileUrl(userInfo.user.profileUrl);
        let profileCalculate = userInfo.user.profileUrl.split('images');
        setTempProfile(`images` + profileCalculate[1]);
        if (userInfo.user.address) {
          setStreet(userInfo.user.address.addressline1);
          setCity(userInfo.user.address.city);
          setState(userInfo.user.address.state);
          setPostalcode(userInfo.user.address.postalCode);
          setCountry(userInfo.user.address.country);
        }
      }
    };
    setValuesToProfileFields();
  }, [userInfo]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="user-profile-page">
            <div className="profile-avatar">
              <img src={tempProfile} alt="" />
              <label htmlFor="profile-avatar">
                <i className="fa-solid fa-pen"></i>
              </label>
              <input
                type="file"
                className="update-profile-avatar"
                id="profile-avatar"
                onChange={(e) => {
                  setProfileUrl(e.target.files[0]);
                }}
              />
            </div>
            <div className="user-details">
              <div className="basic-details">
                <h3>{error && error}</h3>
                <input
                  autoComplete="off"
                  type="text"
                  className="firstName"
                  id="firstName"
                  placeholder="First Name"
                  readOnly={enableNess}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  autoComplete="off"
                  type="text"
                  className="lastName"
                  id="lastName"
                  readOnly={enableNess}
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <input
                  autoComplete="off"
                  type="number"
                  readOnly={enableNess}
                  className="phone-number"
                  id="phone-number"
                  placeholder="Mobile"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <input
                  autoComplete="off"
                  type="email"
                  readOnly={enableNess}
                  className="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  readOnly={enableNess}
                  autoComplete="off"
                  type="password"
                  className="old-password"
                  id="old-password"
                  placeholder="New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  readOnly={enableNess}
                  autoComplete="off"
                  type="new-password"
                  className="new-password"
                  id="new-password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Confirm New Password"
                />
                <textarea
                  readOnly={enableNess}
                  name="street"
                  className="street"
                  id="street"
                  placeholder="Street/Flat No "
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                ></textarea>
                <textarea
                  name="city"
                  id="city"
                  readOnly={enableNess}
                  className="city"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                ></textarea>
              </div>
              <div className="address-details">
                <textarea
                  name="state"
                  readOnly={enableNess}
                  id="state"
                  className="state"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                ></textarea>
                <textarea
                  name="pin-code"
                  id="pin-code"
                  className="pin-code"
                  readOnly={enableNess}
                  placeholder="Zip-Code"
                  value={postalCode}
                  onChange={(e) => setPostalcode(e.target.value)}
                ></textarea>
                <textarea
                  name="country"
                  id="country"
                  className="country"
                  placeholder="Country"
                  readOnly={enableNess}
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                ></textarea>
                <button className="update-profile-button" onClick={updateUser}>
                  {updateLoading ? <Loader /> : 'Update'}
                </button>
                <button
                  className="enable-update-profile-button"
                  onClick={enableFields}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserProfile;
