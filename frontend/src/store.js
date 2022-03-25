import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  hotelListReducer,
  topHotelListReducer,
  listHotelById,
  createHotelReducer,
  updateHotelReducer,
  createHotelGallaryReducer,
  myUserHotelListReducer,
  blockHotelReducer,
} from './reducers/hotelReducers';
import {
  userRegisterReducer,
  userLoginReducer,
  userUpdateProfileReducer,
} from './reducers/userReducers';

const reducer = combineReducers({
  hotelsList: hotelListReducer,
  topHotelsList: topHotelListReducer,
  hotelById: listHotelById,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  updateUser: userUpdateProfileReducer,
  generateHotelTemplate: createHotelReducer,
  updateHotel: updateHotelReducer,
  createGallary: createHotelGallaryReducer,
  userHotels: myUserHotelListReducer,
  blockHotel: blockHotelReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const intialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
