import { configureStore } from '@reduxjs/toolkit';
import { reducerUser } from './reducer/reducerUser';

const rootReducer = {
  user: reducerUser,
};

export const store = configureStore({
  reducer: { ...rootReducer },
});
