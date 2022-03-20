import React from 'react';
import kolkata from '../resources/kolkata.jpg';
import '../styles/RegisterHotelStyle.css';

const RegisterHotel = () => {
  return (
    <div className="hotel-register-container">
      <button className="generate-sample-hotel">Generate Sample</button>
      <div className="hotel-image">
        <label htmlFor="hotel-cover">Select Cover</label>
        <img src={kolkata} alt="" />
        <input type="file" className="hotel-cover" id="hotel-cover" />
      </div>
      <div className="gallary-creator">
        <label htmlFor="gallary-image-picker">
          Select Image To Add In Gallary
        </label>
        <input
          type="file"
          className="gallary-image-picker"
          id="gallary-image-picker"
        />
        <label htmlFor="gallary-message"></label>
        <button className="add-image-to-gallary">Add</button>
      </div>
      <div className="hotel-fields">
        <div className="hotel-form-fields">
          <textarea
            name="hotel-name"
            id="hotel-name"
            placeholder="Hotel Name"
          ></textarea>
          <textarea
            name="hotel-street"
            id="hotel-street"
            placeholder="Street"
          ></textarea>
          <textarea
            name="hotel-city"
            id="hotel-city"
            placeholder="City"
          ></textarea>
          <textarea
            name="hotel-state"
            id="hotel-state"
            placeholder="State"
          ></textarea>
          <textarea
            name="hotel-country"
            id="hotel-country"
            placeholder="Country"
          ></textarea>
          <textarea
            name="hotel-desc"
            id="hotel-desc"
            placeholder="Write something about your hotel"
          ></textarea>
        </div>
        <div className="hotel-form-fields">
          <textarea
            name="hotel-single"
            id="hotel-single"
            placeholder="No Of Single Room"
          ></textarea>
          <textarea
            name="hotel-double"
            id="hotel-double"
            placeholder="No Of Double Room"
          ></textarea>
          <textarea
            name="hotel-Triple"
            id="hotel-Triple"
            placeholder="No Of Triple Room"
          ></textarea>
          <textarea
            name="hotel-luxury"
            id="hotel-luxury"
            placeholder="No Of Luxury Room"
          ></textarea>

          <button className="add-hotel-in-list">Submit For Approval</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterHotel;
