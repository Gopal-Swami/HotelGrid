import React from 'react';

const Users = () => {
  return (
    <div className="users-for-admin-container">
      <table>
        <thead>
          <tr>
            <td>#</td>
            <td>User Name</td>
            <td>Status </td>
            <td colSpan={2}>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
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
            <td>John Doe</td>
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
            <td>John Doe</td>
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

export default Users;
