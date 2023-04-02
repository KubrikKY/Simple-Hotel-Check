const defaultState = {
  hotels: [],
  locations: [],
};

export const SET_HOTELS = 'SET_HOTELS';
export const FETCH_DEFAULT_HOTELS = 'FETCH_DEFAULT_HOTELS';

export const hotelReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_HOTELS:
      return {
        ...state,
        hotels: [...action.payload.results.hotels],
        locations: [...action.payload.results.locations],
      };
    default:
      return state;
  }
};

export const setHotels = (payload) => ({ type: SET_HOTELS, payload });
export const fetchDefaultHotels = () => ({ type: FETCH_DEFAULT_HOTELS });
