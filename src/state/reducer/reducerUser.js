const defaultState = {
  login: '',
  password: '',
  online: false,
};

const SET_LOGIN = 'SET_LOGIN';
const SET_PASSWORD = 'SET_PASSWORD';
const SET_ONLINE = 'SET_ONLINE';
const LOG_OUT = 'LOG_OUT';

export const reducerUser = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, login: action.payload };
    case SET_PASSWORD:
      return { ...state, password: action.payload };
    case SET_ONLINE:
      return { ...state, online: action.payload };
    case LOG_OUT:
      return { ...defaultState };
    default:
      return state;
  }
};

export const setLoginAction = (payload) => ({ type: SET_LOGIN, payload });
export const setPasswordAction = (payload) => ({ type: SET_PASSWORD, payload });
export const setOnlineAction = (payload) => ({ type: SET_ONLINE, payload });
export const logOutAction = () => ({ type: LOG_OUT });
