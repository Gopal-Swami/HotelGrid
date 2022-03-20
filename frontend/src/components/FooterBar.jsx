import React from 'react';
import '../styles/FooterBarStyle.css';
import { Link } from 'react-router-dom';
const FooterBar = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-news-letter">
          <label htmlFor="" className="news-letter">
            Subscribe news letter to get best offers..
          </label>
          <input
            type="email"
            className="news-email"
            id="news-email"
            placeholder="Email..."
          />
          <button className="subscribe-news-letter">Subscribe</button>
        </div>
        <div className="footer-menu-container">
          <ul className="footer-cities">
            <li>
              <Link to="/">KOLKATA</Link>
            </li>
            <li>
              <Link to="/">PUNE</Link>
            </li>
            <li>
              <Link to="/">AHMEDABAD</Link>
            </li>
            <li>
              <Link to="/">BIKANER</Link>
            </li>
            <li>
              <Link to="/">DELHI</Link>
            </li>
            <li>
              <Link to="/">MUMBAI</Link>
            </li>
          </ul>
          <ul className="footer-social">
            <li>
              <Link to="/">INSTAGRAM</Link>
            </li>
            <li>
              <Link to="/">FACEBOOK</Link>
            </li>
            <li>
              <Link to="/">PINTEREST</Link>
            </li>
            <li>
              <Link to="/">LINKEDIN</Link>
            </li>
            <li>
              <Link to="/">QUORA</Link>
            </li>
          </ul>
          <ul className="footer-about-us">
            <li>
              <Link to="/">Help</Link>
            </li>
            <li>
              <Link to="/">Customer Service</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Careers</Link>
            </li>
          </ul>
        </div>
        <div className="footer-copy-right">
          <h1>Copyright &copy; HotelGrid</h1>
        </div>
      </div>
    </>
  );
};

export default FooterBar;
