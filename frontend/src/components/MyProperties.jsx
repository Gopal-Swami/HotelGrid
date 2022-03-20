import React from 'react';

const MyProperties = () => {
  return (
    <div className="hotels-for-admin-owner-container">
      <table>
        <thead>
          <tr>
            <td>#</td>
            <td>Hotel Name</td>
            <td>Status </td>
            <td colSpan={2}>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>New Taj Hotel</td>
            <td>Active</td>
            <td>
              <i class="fa-solid fa-eye"></i>
            </td>
            <td>
              <i class="fa-solid fa-ban"></i>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>New Taj 2</td>
            <td>Blocked</td>
            <td>
              <i class="fa-solid fa-eye"></i>
            </td>
            <td>
              <i class="fa-solid fa-ban"></i>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>New Taj 3</td>
            <td>Active</td>
            <td>
              <i class="fa-solid fa-eye"></i>
            </td>
            <td>
              <i class="fa-solid fa-ban"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyProperties;
