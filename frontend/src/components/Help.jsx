import React from 'react';
import { Link } from 'react-router-dom';

const Help = () => {
  return (
    <div className="help-container">
      <p>Reach Us Here</p>
      <p>
        <span>Hotel Grid</span>
        6 No. , <br /> New React Street, <br />
        Howrah, <br /> West Bengal, 7000008
      </p>
      <p>Call On : 8899778899</p>
      <ul>
        <li>
          <Link to="/">
            <i class="fa-brands fa-instagram"></i>
          </Link>
        </li>
        <li>
          <Link to="/">
            <i class="fa-brands fa-facebook-f"></i>
          </Link>
        </li>
        <li>
          <Link to="/">
            <i class="fa-brands fa-linkedin-in"></i>
          </Link>
        </li>
        <li>
          <Link to="/">
            <i class="fa-solid fa-info"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Help;
