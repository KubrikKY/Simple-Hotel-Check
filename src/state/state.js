import { configureStore } from '@reduxjs/toolkit';
import { reducerUser } from './reducer/reducerUser';
import { hotelReducer } from './reducer/reducerHotel';
import { hotelsWatcher } from '../saga/hotelSaga';
import createSagaMiddleware from '@redux-saga/core';

const rootReducer = {
  user: reducerUser,
  hotels: hotelReducer,
};

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { ...rootReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(hotelsWatcher);
