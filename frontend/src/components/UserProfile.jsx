import React from 'react';
import kolkata from '../resources/kolkata.jpg';
import '../styles/ProfileStyle.css';

const UserProfile = () => {
  return (
    <>
      <div className="user-profile-page">
        <div className="profile-avatar">
          <img src={kolkata} alt="" />
          <label htmlFor="profile-avatar">
            <i class="fa-solid fa-pen"></i>
          </label>
          <input
            type="file"
            className="update-profile-avatar"
            id="profile-avatar"
          />
        </div>
        <div className="user-details">
          <div className="basic-details">
            <input
              autocomplete="off"
              type="text"
              className="firstName"
              id="firstName"
              placeholder="First Name"
            />
            <input
              autocomplete="off"
              type="text"
              className="lastName"
              id="lastName"
              placeholder="Last Name"
            />
            <input
              autocomplete="off"
              type="number"
              className="phone-number"
              id="phone-number"
              placeholder="Mobile"
            />
            <input
              autocomplete="off"
              type="email"
              className="email"
              id="email"
              placeholder="Email"
            />
            <input
              autocomplete="off"
              type="password"
              className="old-password"
              id="old-password"
              placeholder="Old Password"
            />
            <input
              autocomplete="off"
              type="new-password"
              className="new-password"
              id="new-password"
              placeholder="New Password"
            />
            <textarea
              name="street"
              className="street"
              id="street"
              placeholder="Street/Flat No "
            ></textarea>
            <textarea
              name="city"
              id="city"
              className="city"
              placeholder="City"
            ></textarea>
          </div>
          <div className="address-details">
            <textarea
              name="state"
              id="state"
              className="state"
              placeholder="State"
            ></textarea>
            <textarea
              name="pin-code"
              id="pin-code"
              className="pin-code"
              placeholder="Zip-Code"
            ></textarea>
            <textarea
              name="country"
              id="country"
              className="country"
              placeholder="Country"
            ></textarea>
            <button className="update-profile-button">Update</button>
            <button className="enable-update-profile-button">Edit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
