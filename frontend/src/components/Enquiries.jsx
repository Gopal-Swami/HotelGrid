import React from 'react';

const Enquiries = () => {
  return (
    <div className="enquiries-container">
      <table>
        <thead>
          <tr>
            <td>Sender</td>
            <td>Message</td>
            <td>Response Status</td>
            <td>Date</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>New Taj Hotel</td>
            <td>Book HAs Confirmed</td>
            <td>
              <i class="fa-solid fa-check"></i>
            </td>
            <td>10-03-2022</td>
            <td>
              <i class="fa-solid fa-reply"></i>
            </td>
          </tr>
          <tr>
            <td>New Taj Hotel</td>
            <td>Book HAs Confirmed</td>
            <td>
              <i class="fa-solid fa-xmark"></i>
            </td>
            <td>10-03-2022</td>
            <td>
              <i class="fa-solid fa-reply"></i>
            </td>
          </tr>
          <tr>
            <td>New Taj Hotel</td>
            <td>Book HAs Confirmed</td>
            <td>
              <i class="fa-solid fa-check"></i>
            </td>
            <td>10-03-2022</td>
            <td>
              <i class="fa-solid fa-reply"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Enquiries;
