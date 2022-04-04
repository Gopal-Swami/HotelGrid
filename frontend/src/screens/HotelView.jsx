import React, { useEffect } from 'react';
import Gallary from '../components/Gallary';
import kolkata from '../resources/kolkata.jpg';
import '../styles/HotelViewStyle.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getHotelById } from '../actions/hotelActions';
import Loader from '../components/Loader';
import { Rating } from '@mui/material';

const HotelView = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const id = params.id;
  const hotelById = useSelector((state) => state.hotelById);
  const { loading, error, hotel } = hotelById;
  useEffect(() => {
    dispatch(getHotelById(id));
  }, [dispatch, id]);

  return (
    <>
      {loading ? (
        <div className="universal-page-loader">
          <Loader />
        </div>
      ) : !hotel ? (
        <div className="universal-page-loader">
          <p>Opps! Something Went Wrong</p>
        </div>
      ) : (
        <>
          <div className="hotel-view-container">
            <div className="hotel-view-left-container">
              <div className="hotel-title-container">
                <h1>{hotel.hotelName} </h1>
              </div>
              <p className="hotel-address-at-view">
                {hotel.address.addressline1}, {hotel.address.city},
                {hotel.address.state}, {hotel.address.postalCode}
              </p>
              <Gallary
                hotelCover={hotel.hotelPhotoUrl}
                gallaryItems={hotel.gallary}
              />
              <div className="facility-container">
                <span>
                  <i className="fa-solid fa-wifi"></i>
                  Wifi
                </span>
                <span>
                  <i className="fa-solid fa-tv"></i>
                  TV
                </span>
                <span>
                  <i className="fa-solid fa-wind"></i>
                  Air Conditionar
                </span>
                <span>
                  <i className="fa-solid fa-check-double"></i> Sanitized
                </span>
              </div>
              <div className="submit-feedback">
                <p className="write-a-review">Leave a review..</p>
                <textarea
                  name="review-message"
                  id="review-message"
                  placeholder="Start Writing Here........."
                  className="review-message"
                ></textarea>
                <p className="rating">
                  <Rating value={5} />
                </p>
                <button className="submit-review">Submit</button>
              </div>
            </div>
            <div className="facility-rooms">
              {hotel.availability.map((aval, index) => (
                <div key={index} className="hotel-room-card">
                  <div className="room-description">
                    <h3>
                      {aval.type} At ₹ {aval.price}
                    </h3>
                    <i className="fa-solid fa-bed"></i> 1 large double bed ,
                    <br />
                    {aval.type !== 'Single' ? (
                      <>
                        <i className="fa-solid fa-wind"></i>Air conditioning,
                        <br />
                        <i className="fa-solid fa-wifi"></i> Free WiFi,
                        <br />
                      </>
                    ) : (
                      ''
                    )}
                    <i className="fa-solid fa-tv"></i> Flat-screen TV,
                    <br />
                    <i className="fa-solid fa-toilet-paper"></i> Free toiletries
                  </div>

                  <div className="hotel-no-of-rooms-to-book">
                    <select name="no-of-rooms" id="no-of-rooms">
                      <option defaultValue="None">No of Rooms</option>
                      {[...Array(aval.rooms).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="book-button">
                    <button>Book Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="enquiry-feedback-form-container">
            <div className="feed-backs">
              <h1>Our Reviews</h1>
              {hotel.reviews.map((review) => (
                <div className="feed-card" key={review._id}>
                  <p className="user">{review.name}</p>
                  <p className="comment">{review.comment}</p>
                  <Rating value={review.rating} />
                </div>
              ))}
            </div>
            <div className="enquiry-form">
              <h1>How May We Help You ?</h1>
              <input
                type="text"
                className="enquiry-user-name"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="enquiry-user-email"
                placeholder="Your Email"
              />
              <textarea
                name="enquiry-user-message"
                id="enquiry-user-message"
                cols="30"
                rows="10"
                placeholder="Write your concern here. We will get back to you."
                className="enquiry-user-message"
              ></textarea>
              <button className="submit-enquiry">Submit</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HotelView;
