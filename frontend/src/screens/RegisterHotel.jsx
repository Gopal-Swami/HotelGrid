import React, { useEffect, useState } from 'react';
import '../styles/RegisterHotelStyle.css';
import { generateHotelTemplate } from '../actions/hotelActions';
import { useDispatch, useSelector } from 'react-redux';

const RegisterHotel = () => {
  const dispatch = useDispatch();
  const [hotelPhotoUrl, setHotelPhotoUrl] = useState(null);
  const [hotelName, setHotelName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalcode] = useState('');
  const [hotelDescription, setHotelDescription] = useState('');
  const [singleRoom, setSingleRooms] = useState(0);
  const [doubleRoom, setDoubleRooms] = useState(0);
  const [tripleRoom, setTripleRooms] = useState(0);
  const [luxuryRoom, setLuxuryRooms] = useState(0);
  const sampleHotel = useSelector((state) => state.generateHotelTemplate);

  const {
    loading: generateHotelLoading,
    error: generateHotelError,
    hotel: generatedHotel,
  } = sampleHotel;

  const generateSampleHotel = () => {
    dispatch(generateHotelTemplate());
  };

  useEffect(() => {
    if (generatedHotel) {
      console.log(generatedHotel);
    }
  }, [generatedHotel]);
  return (
    <div className="hotel-register-container">
      <button onClick={generateSampleHotel} className="generate-sample-hotel">
        Generate Sample
      </button>
      <div className="hotel-image">
        <label htmlFor="hotel-cover">Select Cover</label>
        <img
          src={hotelPhotoUrl !== null ? hotelPhotoUrl : 'images\\hotel.jpg'}
          alt=""
        />
        <input
          type="file"
          onChange={(e) => setHotelPhotoUrl(e.target.files[0])}
          className="hotel-cover"
          id="hotel-cover"
        />
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
            value={hotelName}
            onChange={(e) => setHotelName(e.target.value)}
            placeholder="Hotel Name"
          ></textarea>
          <textarea
            name="hotel-street"
            id="hotel-street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            placeholder="Street"
          ></textarea>
          <textarea
            name="hotel-city"
            id="hotel-city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
          ></textarea>
          <textarea
            name="hotel-state"
            id="hotel-state"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          ></textarea>
          <textarea
            name="hotel-postal-code"
            id="hotel-postal-code"
            placeholder="Postal Code"
            value={postalCode}
            onChange={(e) => setPostalcode(e.target.value)}
          ></textarea>
          <textarea
            name="hotel-country"
            id="hotel-country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Country"
          ></textarea>
          <textarea
            name="hotel-desc"
            id="hotel-desc"
            value={hotelDescription}
            onChange={(e) => setHotelDescription(e.target.value)}
            placeholder="Write something about your hotel"
          ></textarea>
        </div>
        <div className="hotel-form-fields">
          <textarea
            name="hotel-single"
            id="hotel-single"
            value={singleRoom}
            onChange={(e) => setSingleRooms(e.target.value)}
            placeholder="No Of Single Room"
          ></textarea>
          <textarea
            value={doubleRoom}
            onChange={(e) => setDoubleRooms(e.target.value)}
            name="hotel-double"
            id="hotel-double"
            placeholder="No Of Double Room"
          ></textarea>
          <textarea
            name="hotel-Triple"
            value={tripleRoom}
            onChange={(e) => setTripleRooms(e.target.value)}
            id="hotel-Triple"
            placeholder="No Of Triple Room"
          ></textarea>
          <textarea
            value={luxuryRoom}
            onChange={(e) => setLuxuryRooms(e.target.value)}
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
