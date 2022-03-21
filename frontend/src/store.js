import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  hotelListReducer,
  topHotelListReducer,
  listHotelById,
} from './reducers/hotelReducers';

const reducer = combineReducers({
  hotelsList: hotelListReducer,
  topHotelsList: topHotelListReducer,
  hotelById: listHotelById,
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