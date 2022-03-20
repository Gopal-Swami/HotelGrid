import React from 'react';

const Bookings = () => {
  return (
    <>
      <div className="bookings-container">
        <table>
          <thead>
            <tr>
              <td>#</td>
              <td>Hotel Name</td>
              <td>Date</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>New Taj Hotel</td>
              <td>10-03-2022</td>
              <td>
                <i class="fa-solid fa-eye"></i>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>New Taj Hotel</td>
              <td>10-03-2022</td>
              <td>
                <i class="fa-solid fa-eye"></i>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>New Taj Hotel</td>
              <td>10-03-2022</td>
              <td>
                <i class="fa-solid fa-eye"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Bookings;
