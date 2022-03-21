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
} from '../constants/hotelConstants';

export const hotelListReducer = (state = { hotels: [] }, action) => {
  switch (action.type) {
    case HOTEL_LIST_REQUEST:
      return { loading: true, hotels: [] };
    case HOTEL_LIST_SUCCESS:
      return {
        loading: false,
        hotels: action.payload.hotels,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case HOTEL_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const topHotelListReducer = (state = { hotels: [] }, action) => {
  switch (action.type) {
    case TOP_HOTEL_LIST_REQUEST:
      return { loading: true, hotels: [] };
    case TOP_HOTEL_LIST_SUCCESS:
      return {
        loading: false,
        hotels: action.payload,
      };
    case TOP_HOTEL_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listHotelById = (state = {}, action) => {
  switch (action.type) {
    case HOTEL_BY_ID_REQUEST:
      return { loading: true };
    case HOTEL_BY_ID_SUCCESS:
      return {
        loading: false,
        hotel: action.payload,
      };
    case HOTEL_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createHotelReducer = (state = {}, action) => {
  switch (action.type) {
    case HOTEL_CREATE_REQUEST:
      return { loading: true };
    case HOTEL_CREATE_SUCCESS:
      return {
        loading: false,
        hotel: action.payload,
      };
    case HOTEL_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateHotelReducer = (state = {}, action) => {
  switch (action.type) {
    case HOTEL_UPDATE_REQUEST:
      return { loading: true };
    case HOTEL_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        hotel: action.payload,
      };
    case HOTEL_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
