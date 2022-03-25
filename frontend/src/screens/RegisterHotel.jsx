import React, { useEffect, useState } from 'react';
import '../styles/RegisterHotelStyle.css';
import {
  generateHotelTemplate,
  updateHotel,
  createGallaryImage,
  getHotelById,
} from '../actions/hotelActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';

const RegisterHotel = ({ hotelId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hotelPhotoUrl, setHotelPhotoUrl] = useState(null);
  const [hotelName, setHotelName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalcode] = useState('');
  const [hotelDescription, setHotelDescription] = useState('');
  const [singleRoom, setSingleRooms] = useState('');
  const [doubleRoom, setDoubleRooms] = useState('');
  const [tripleRoom, setTripleRooms] = useState('');
  const [luxuryRoom, setLuxuryRooms] = useState('');
  const [singleRoomPrice, setSingleRoomsPrice] = useState('');
  const [doubleRoomPrice, setDoubleRoomsPrice] = useState('');
  const [tripleRoomPrice, setTripleRoomsPrice] = useState('');
  const [luxuryRoomPrice, setLuxuryRoomsPrice] = useState('');
  const [gallaryImage, setGallaryImage] = useState(null);
  const sampleHotel = useSelector((state) => state.generateHotelTemplate);

  const {
    loading: generateHotelLoading,
    error: generateHotelError,
    hotel: generatedHotel,
  } = sampleHotel;

  const updatedHotelData = useSelector((state) => state.updateHotel);

  const {
    loading: updateHotelLoading,
    error: updateHotelError,
    hotel: updatedHotel,
  } = updatedHotelData;

  const gallaryStatus = useSelector((state) => state.createGallary);

  const {
    loading: gallaryLoading,
    error: gallaryError,
    gallary: hotelWithGallary,
  } = gallaryStatus;

  const generateSampleHotel = () => {
    dispatch(generateHotelTemplate());
  };

  const submitForApproval = () => {
    if (
      hotelName === '' ||
      street === '' ||
      city === '' ||
      state === '' ||
      country === '' ||
      postalCode === '' ||
      hotelDescription === '' ||
      singleRoom === '' ||
      doubleRoom === '' ||
      tripleRoom === '' ||
      luxuryRoom === ''
    ) {
      alert('Please Fill All Fields To Proceed');
    } else {
      const data = new FormData();
      data.append('hotelName', hotelName);
      data.append('addressline1', street);
      data.append('city', city);
      data.append('state', state);
      data.append('postalCode', postalCode);
      data.append('country', country);
      data.append('hotelDescription', hotelDescription);
      data.append('file', hotelPhotoUrl);
      data.append('singleRoom', parseInt(singleRoom));
      data.append('doubleRoom', parseInt(doubleRoom));
      data.append('tripleRoom', parseInt(tripleRoom));
      data.append('luxuryRoom', parseInt(luxuryRoom));
      data.append('singleRoomPrice', parseInt(singleRoomPrice));
      data.append('doubleRoomPrice', parseInt(doubleRoomPrice));
      data.append('tripleRoomPrice', parseInt(tripleRoomPrice));
      data.append('luxuryRoomPrice', parseInt(luxuryRoomPrice));
      if (generatedHotel) {
        dispatch(updateHotel(generatedHotel._id, data));
      } else if (hotelId) {
        dispatch(updateHotel(hotelId, data));
      }
    }
  };

  const addGallary = () => {
    if (gallaryImage !== null) {
      const data = new FormData();
      data.append('file', gallaryImage);
      dispatch(createGallaryImage(generatedHotel._id, data));
    }
  };

  const hotelById = useSelector((state) => state.hotelById);
  const { loading: hotelByIdLoading, error: hotelByIdError, hotel } = hotelById;

  useEffect(() => {
    const setHotelValues = () => {
      if (hotelId) {
        dispatch(getHotelById(hotelId));
        if (hotel) {
          setHotelPhotoUrl(hotel.hotelPhotoUrl);
          setHotelName(hotel.hotelName);
          setStreet(hotel.address.addressline1);
          setCity(hotel.address.city);
          setState(hotel.address.state);
          setPostalcode(hotel.address.postalCode);
          setCountry(hotel.address.country);
          setHotelDescription(hotel.hotelDescription);
          setSingleRooms(hotel.availability[0].rooms);
          setDoubleRooms(hotel.availability[1].rooms);
          setTripleRooms(hotel.availability[2].rooms);
          setLuxuryRooms(hotel.availability[3].rooms);
          setSingleRoomsPrice(hotel.availability[0].price);
          setDoubleRoomsPrice(hotel.availability[1].price);
          setTripleRoomsPrice(hotel.availability[2].price);
          setLuxuryRoomsPrice(hotel.availability[3].price);
        }
      } else {
        if (generatedHotel) {
          setHotelName(generatedHotel.hotelName);
          setStreet(generatedHotel.address.addressline1);
          setCity(generatedHotel.address.city);
          setState(generatedHotel.address.state);
          setPostalcode(generatedHotel.address.postalCode);
          setCountry(generatedHotel.address.country);
          setHotelDescription(generatedHotel.hotelDescription);
          setSingleRooms(generatedHotel.availability[0].rooms);
          setDoubleRooms(generatedHotel.availability[1].rooms);
          setTripleRooms(generatedHotel.availability[2].rooms);
          setLuxuryRooms(generatedHotel.availability[3].rooms);
          setSingleRoomsPrice(generatedHotel.availability[0].price);
          setDoubleRoomsPrice(generatedHotel.availability[1].price);
          setTripleRoomsPrice(generatedHotel.availability[2].price);
          setLuxuryRoomsPrice(generatedHotel.availability[3].price);
        }
      }
    };
    setHotelValues();
  }, [dispatch, hotelId, generatedHotel]);
  return (
    <div className="hotel-register-container">
      {hotelByIdLoading ? (
        <Loader />
      ) : hotelByIdError ? (
        hotelByIdError
      ) : (
        <>
          <button
            onClick={generateSampleHotel}
            className="generate-sample-hotel"
          >
            {generateHotelLoading ? (
              <Loader />
            ) : generateHotelError ? (
              generateHotelError
            ) : generatedHotel ? (
              'Sample Generated. Please Add Details To Register'
            ) : (
              'Generate Sample'
            )}
          </button>
          <div className="hotel-image">
            <label htmlFor="hotel-cover">Select Cover</label>
            <img src={hotelPhotoUrl} alt="" />
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
              onChange={(e) => setGallaryImage(e.target.files[0])}
              type="file"
              className="gallary-image-picker"
              id="gallary-image-picker"
            />
            <label htmlFor="gallary-message"></label>
            <button onClick={addGallary} className="add-image-to-gallary">
              {gallaryLoading ? (
                <Loader />
              ) : gallaryError ? (
                gallaryError
              ) : hotelWithGallary ? (
                'Image Added, Select More To Add'
              ) : (
                'Add'
              )}
            </button>
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
            </div>
            <div className="hotel-form-fields">
              <textarea
                name="hotel-single"
                id="hotel-single-price"
                value={singleRoomPrice}
                onChange={(e) => setSingleRoomsPrice(e.target.value)}
                placeholder="Price"
              ></textarea>
              <textarea
                value={doubleRoomPrice}
                onChange={(e) => setDoubleRoomsPrice(e.target.value)}
                name="hotel-double"
                id="hotel-double-price"
                placeholder="Price"
              ></textarea>
              <textarea
                name="hotel-Triple"
                value={tripleRoomPrice}
                onChange={(e) => setTripleRoomsPrice(e.target.value)}
                id="hotel-Triple-price"
                placeholder="Price"
              ></textarea>
              <textarea
                value={luxuryRoomPrice}
                onChange={(e) => setLuxuryRoomsPrice(e.target.value)}
                name="hotel-luxury"
                id="hotel-luxury-price"
                placeholder="Price"
              ></textarea>
            </div>
          </div>
          <button onClick={submitForApproval} className="add-hotel-in-list">
            {updateHotelLoading ? (
              <Loader />
            ) : updateHotelError ? (
              updateHotelError
            ) : updatedHotel ? (
              'Updated Hotel And Submitted For Approval'
            ) : (
              'Submit For Approval'
            )}
          </button>
        </>
      )}
    </div>
  );
};

export default RegisterHotel;
