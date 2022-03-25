import {
  HOTEL_LIST_REQUEST,
  HOTEL_LIST_SUCCESS,
  HOTEL_LIST_FAIL,
  TOP_HOTEL_LIST_REQUEST,
  TOP_HOTEL_LIST_SUCCESS,
  TOP_HOTEL_LIST_FAIL,
  HOTEL_BY_ID_REQUEST,
  HOTEL_BY_ID_SUCCESS,
  HOTEL_BY_ID_FAIL,
  HOTEL_CREATE_REQUEST,
  HOTEL_CREATE_SUCCESS,
  HOTEL_CREATE_FAIL,
  HOTEL_UPDATE_REQUEST,
  HOTEL_UPDATE_SUCCESS,
  HOTEL_UPDATE_FAIL,
  GALLARY_CREATE_REQUEST,
  GALLARY_CREATE_SUCCESS,
  GALLARY_CREATE_FAIL,
} from '../constants/hotelConstants';
import axios from 'axios';

export const listHotels =
  (keyword = '', pageNumber = '') =>
  async (dispatch) => {
    try {
      dispatch({ type: HOTEL_LIST_REQUEST });
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/v1/hotels?keyword=${keyword}&pageNumber=${pageNumber}`
      );
      dispatch({ type: HOTEL_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: HOTEL_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listTopHotels = () => async (dispatch) => {
  try {
    dispatch({ type: TOP_HOTEL_LIST_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/v1/hotels/top`
    );
    dispatch({ type: TOP_HOTEL_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TOP_HOTEL_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getHotelById = (id) => async (dispatch) => {
  try {
    dispatch({ type: HOTEL_BY_ID_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/v1/hotels/${id}`
    );
    dispatch({ type: HOTEL_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: HOTEL_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const generateHotelTemplate = () => async (dispatch, getState) => {
  try {
    dispatch({ type: HOTEL_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    if (userInfo.user.isOwner) {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/hotels/owner`,
        {},
        config
      );
      dispatch({ type: HOTEL_CREATE_SUCCESS, payload: data });
    } else if (userInfo.user.isAdmin) {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/hotels/admin`,
        config
      );
      dispatch({ type: HOTEL_CREATE_SUCCESS, payload: data });
    }
    console.log(config);
  } catch (error) {
    dispatch({
      type: HOTEL_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateHotel =
  (hotelId, formData) => async (dispatch, getState) => {
    try {
      dispatch({ type: HOTEL_UPDATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      if (userInfo.user.isOwner) {
        const { data } = await axios.put(
          `${process.env.REACT_APP_BASE_URL}/api/v1/hotels/${hotelId}/owner`,
          formData,
          config
        );
        dispatch({ type: HOTEL_UPDATE_SUCCESS, payload: data });
      } else if (userInfo.user.isAdmin) {
        const { data } = await axios.put(
          `${process.env.REACT_APP_BASE_URL}/api/v1/hotels/${hotelId}/admin`,
          formData,
          config
        );
        dispatch({ type: HOTEL_UPDATE_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({
        type: HOTEL_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const createGallaryImage =
  (hotelId, formData) => async (dispatch, getState) => {
    try {
      dispatch({ type: GALLARY_CREATE_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      if (userInfo.user.isOwner) {
        const { data } = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/api/v1/gallary/${hotelId}/owner`,
          formData,
          config
        );
        dispatch({ type: GALLARY_CREATE_SUCCESS, payload: data });
      } else if (userInfo.user.isAdmin) {
        const { data } = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/api/v1/gallary/${hotelId}/admin`,
          formData,
          config
        );
        dispatch({ type: GALLARY_CREATE_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({
        type: GALLARY_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
