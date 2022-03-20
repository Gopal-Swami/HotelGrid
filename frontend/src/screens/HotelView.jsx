import React from 'react';
import Gallary from '../components/Gallary';
import kolkata from '../resources/kolkata.jpg';
import '../styles/HotelViewStyle.css';

const HotelView = () => {
  return (
    <>
      <div className="hotel-view-container">
        <div className="hotel-view-left-container">
          <div className="hotel-title-container">
            <h1>New Taj Hotel </h1>
          </div>
          <p className="hotel-address-at-view">
            New Node Street, Kolkata, West Bengal, 700001
          </p>
          <Gallary />
          <div className="facility-container">
            <span>
              <i class="fa-solid fa-wifi"></i>
              Wifi
            </span>
            <span>
              <i class="fa-solid fa-tv"></i>
              TV
            </span>
            <span>
              <i class="fa-solid fa-wind"></i>
              Air Conditionar
            </span>
            <span>
              <i class="fa-solid fa-check-double"></i> Sanitized
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
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
              <i class="fa-solid fa-star" style={{ color: 'gray' }}></i>
            </p>
            <button className="submit-review">Submit</button>
          </div>
        </div>
        <div className="facility-rooms">
          <div className="hotel-room-card">
            <div className="room-description">
              <h3>Single</h3>1 extra-large double bed and 1 large double bed Air
              conditioning Ensuite bathroom Flat-screen TV Free WiFi Free
              toiletries Shower Toilet Towels
            </div>

            <div className="hotel-no-of-rooms-to-book">
              <select name="no-of-rooms" id="no-of-rooms">
                <option value="None" selected>
                  No of Rooms
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>

            <div className="book-button">
              <button>Book Now</button>
            </div>
          </div>
          <div className="hotel-room-card">
            <div className="room-description">
              <h3>Single</h3>1 extra-large double bed and 1 large double bed Air
              conditioning Ensuite bathroom Flat-screen TV Free WiFi Free
              toiletries Shower Toilet Towels
            </div>
            <div className="hotel-no-of-rooms-to-book">
              <select name="no-of-rooms" id="no-of-rooms">
                <option value="None" selected>
                  No of Rooms
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>
            <div className="book-button">
              <button>Book Now</button>
            </div>
          </div>
          <div className="hotel-room-card">
            <div className="room-description">
              <h3>Single</h3>1 extra-large double bed and 1 large double bed Air
              conditioning Ensuite bathroom Flat-screen TV Free WiFi Free
              toiletries Shower Toilet Towels
            </div>
            <div className="hotel-no-of-rooms-to-book">
              <select name="no-of-rooms" id="no-of-rooms">
                <option value="None" selected>
                  No of Rooms
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>
            <div className="book-button">
              <button>Book Now</button>
            </div>
          </div>
          <div className="hotel-room-card">
            <div className="room-description">
              <h3>Single</h3>1 extra-large double bed and 1 large double bed Air
              conditioning Ensuite bathroom Flat-screen TV Free WiFi Free
              toiletries Shower Toilet Towels
            </div>
            <div className="hotel-no-of-rooms-to-book">
              <select name="no-of-rooms" id="no-of-rooms">
                <option value="None" selected>
                  No of Rooms
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>
            <div className="book-button">
              <button>Book Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="enquiry-feedback-form-container">
        <div className="feed-backs">
          <h1>Our Reviews</h1>
          <div className="feed-card">
            <p className="user">John Doe</p>
            <p className="comment">Lorem ipsum dolor sit amet.</p>
            <p className="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
              <i class="fa-solid fa-star" style={{ color: 'gray' }}></i>
            </p>
          </div>
          <div className="feed-card">
            <p className="user">John Doe</p>
            <p className="comment">Lorem ipsum dolor sit amet.</p>
            <p className="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
              <i class="fa-solid fa-star" style={{ color: 'gray' }}></i>
            </p>
          </div>
          <div className="feed-card">
            <p className="user">John Doe</p>
            <p className="comment">Lorem ipsum dolor sit amet.</p>
            <p className="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
              <i class="fa-solid fa-star" style={{ color: 'gray' }}></i>
            </p>
          </div>
          <div className="feed-card">
            <p className="user">John Doe</p>
            <p className="comment">Lorem ipsum dolor sit amet.</p>
            <p className="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
              <i class="fa-solid fa-star" style={{ color: 'gray' }}></i>
            </p>
          </div>
          <div className="feed-card">
            <p className="user">John Doe</p>
            <p className="comment">Lorem ipsum dolor sit amet.</p>
            <p className="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
              <i class="fa-solid fa-star" style={{ color: 'gray' }}></i>
            </p>
          </div>
          <div className="feed-card">
            <p className="user">John Doe</p>
            <p className="comment">Lorem ipsum dolor sit amet.</p>
            <p className="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
              <i class="fa-solid fa-star" style={{ color: 'gray' }}></i>
            </p>
          </div>
          <div className="feed-card">
            <p className="user">John Doe</p>
            <p className="comment">Lorem ipsum dolor sit amet.</p>
            <p className="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
              <i class="fa-solid fa-star" style={{ color: 'gray' }}></i>
            </p>
          </div>
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
  );
};

export default HotelView;
