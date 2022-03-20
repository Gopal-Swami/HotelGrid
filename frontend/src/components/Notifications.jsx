import React from 'react';

const Notifications = () => {
  return (
    <div className="notification-container">
      <table>
        <thead>
          <tr>
            <td>Sender</td>
            <td>Subject</td>
            <td>Date</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>New Taj Hotel</td>
            <td>Book HAs Confirmed</td>
            <td>10-03-2022</td>
            <td>
              <i class="fa-solid fa-eye"></i>
            </td>
          </tr>
          <tr>
            <td>New Taj Hotel</td>
            <td>Book HAs Confirmed</td>
            <td>10-03-2022</td>
            <td>
              <i class="fa-solid fa-eye"></i>
            </td>
          </tr>
          <tr>
            <td>New Taj Hotel</td>
            <td>Book HAs Confirmed</td>
            <td>10-03-2022</td>
            <td>
              <i class="fa-solid fa-eye"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Notifications;
