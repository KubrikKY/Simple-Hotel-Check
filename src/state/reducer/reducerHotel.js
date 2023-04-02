const defaultState = {
  hotels: [],
  location: 'Москва',
  checkIn: '',
  checkOut: 1,
};

export const SET_HOTELS = 'SET_HOTELS';
export const FETCH_DEFAULT_HOTELS = 'FETCH_DEFAULT_HOTELS';
export const FETCH_FIND_HOTELS = 'FETCH_FIND_HOTELS';
export const SELECT_CHECK_IN = 'SELECT_CHECK_IN';
export const SELECT_CHECK_OUT = 'SELECT_CHECK_OUT';
export const SELECT_LOCATION = 'SELECT_LOCATION';

export const hotelReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_HOTELS:
      return {
        ...state,
        hotels: [...action.payload],
      };
    case SELECT_CHECK_IN:
      return { ...state, checkIn: action.payload };
    case SELECT_CHECK_OUT:
      return { ...state, checkOut: action.payload };
    case SELECT_LOCATION:
      return { ...state, location: action.payload };
    default:
      return state;
  }
};

export const setHotels = (payload) => ({ type: SET_HOTELS, payload });
export const fetchDefaultHotels = () => ({ type: FETCH_DEFAULT_HOTELS });
export const fetchFindHotels = ({ checkIn, checkOut, location }) => ({
  type: FETCH_FIND_HOTELS,
  checkIn,
  checkOut,
  location,
});
export const selectCheckIn = (payload) => ({ type: SELECT_CHECK_IN, payload });
export const selectCheckOut = (payload) => ({
  type: SELECT_CHECK_OUT,
  payload,
});
export const selectLocation = (payload) => ({
  type: SELECT_LOCATION,
  payload,
});
