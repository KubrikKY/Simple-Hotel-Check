const defaultState = {
  login: '',
  password: '',
  online: false,
  favourites: [],
};

const SET_LOGIN = 'SET_LOGIN';
const ADD_FAVORITES = 'ADD_FAVORITES';
const DELETE_FAVORITES = 'DELETE_FAVORITES';

const SET_PASSWORD = 'SET_PASSWORD';
const SET_ONLINE = 'SET_ONLINE';
const LOG_OUT = 'LOG_OUT';
const ADD_FAVORITES_FROM_LOCAL = 'ADD_FAVORITES_FROM_LOCAL';

export const reducerUser = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, login: action.payload };
    case SET_PASSWORD:
      return { ...state, password: action.payload };
    case SET_ONLINE:
      return { ...state, online: action.payload };
    case ADD_FAVORITES:
      const newFavouritesAdd = [...state.favourites, action.payload];
      localStorage.setItem(
        state.login,
        JSON.stringify({ ...state, favourites: [...newFavouritesAdd] })
      );
      return { ...state, favourites: [...newFavouritesAdd] };
    case ADD_FAVORITES_FROM_LOCAL:
      const favoriteFromLocal = JSON.parse(localStorage.getItem(state.login));
      return { ...state, favourites: [...favoriteFromLocal.favourites] };
    case DELETE_FAVORITES:
      const newFavouritesDelete = [...state.favourites];
      newFavouritesDelete.splice(
        newFavouritesDelete.indexOf(action.payload),
        1
      );
      localStorage.setItem(
        state.login,
        JSON.stringify({ ...state, favourites: [...newFavouritesDelete] })
      );

      return { ...state, favourites: [...newFavouritesDelete] };
    case LOG_OUT:
      return { ...defaultState, favourites: [] };
    default:
      return state;
  }
};

export const setLoginAction = (payload) => ({ type: SET_LOGIN, payload });
export const setPasswordAction = (payload) => ({ type: SET_PASSWORD, payload });
export const setOnlineAction = (payload) => ({ type: SET_ONLINE, payload });
export const logOutAction = () => ({ type: LOG_OUT });
export const addFavoritesAction = (payload) => ({
  type: ADD_FAVORITES,
  payload,
});
export const deleteFavoritesAction = (payload) => ({
  type: DELETE_FAVORITES,
  payload,
});

export const addFavoritesFromLocalAction = () => ({
  type: ADD_FAVORITES_FROM_LOCAL,
});
