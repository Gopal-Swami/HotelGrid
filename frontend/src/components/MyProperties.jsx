import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listMyHotels, blockHotel } from '../actions/hotelActions';
import Loader from '../components/Loader';

const MyProperties = ({ updateHotelMethod }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userHotelsData = useSelector((state) => state.userHotels);
  const {
    loading: userHotelLoading,
    error: userHotelError,
    hotels: userHotels,
  } = userHotelsData;
  const blockedHotel = useSelector((state) => state.blockHotel);
  const {
    loading: blockHotelLoading,
    error: blockHotelError,
    success: blockSuccess,
  } = blockedHotel;
  useEffect(() => {
    dispatch(listMyHotels(userInfo.user._id));
  }, [dispatch, userInfo.user._id]);
  return (
    <div className="hotels-for-admin-owner-container">
      {userHotelLoading ? (
        <Loader />
      ) : userHotelError ? (
        'Opps Something Went Wrong!. Please Contact Admin'
      ) : (
        <>
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
              {userHotels.map((hotel, index) => (
                <tr key={hotel._id}>
                  <td>{index + 1}</td>
                  <td>{hotel.hotelName}</td>
                  <td>{hotel.isBlocked ? 'Blocked' : 'Active'}</td>
                  <td>
                    <i
                      className="fa-solid fa-eye"
                      onClick={(e) => updateHotelMethod(hotel._id)}
                    ></i>
                  </td>
                  {userInfo.user.isAdmin ? (
                    <td>
                      {blockHotelLoading ? (
                        <Loader />
                      ) : blockHotelError ? (
                        blockHotelError
                      ) : (
                        <i
                          className="fa-solid fa-ban"
                          onClick={(e) => dispatch(blockHotel(hotel._id))}
                        ></i>
                      )}
                    </td>
                  ) : (
                    ''
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default MyProperties;
