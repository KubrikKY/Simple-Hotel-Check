import { put, takeEvery, call } from 'redux-saga/effects';
import {
  FETCH_DEFAULT_HOTELS,
  FETCH_FIND_HOTELS,
  setHotels,
} from '../state/reducer/reducerHotel';
import { checkOutForRequest } from '../func/checkOutForRequest';

//TEST
const fetchHotels = () => {
  const date = new Date();
  const curr_year = date.getFullYear(),
    curr_month =
      date.getMonth() < 10
        ? '0' + (+date.getMonth() + 1)
        : +date.getMonth() + 1,
    curr_date = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
    next_date =
      date.getDate() < 10 ? '0' + (+date.getDate() + 1) : +date.getDate() + 1;
  const nowDateRequest = curr_year + '-' + curr_month + '-' + curr_date;
  const nextDateRequest = curr_year + '-' + curr_month + '-' + next_date;

  return fetch(
    `https://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=${nowDateRequest}&checkOut=${nextDateRequest}&limit=5`
  );
};

const fetchHotelsByFind = ({ checkIn, checkOut, location }) => {
  const checkOutRequest = checkOutForRequest(checkIn, checkOut);
  return fetch(
    `https://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOutRequest}&limit=5`
  );
};
//TEST

function* fetchHotelsDefaultWorker() {
  const data = yield call(fetchHotels);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(setHotels(json));
}

function* fetchHotelsFindWorker(checkIn, checkOut, location) {
  const data = yield call(() => fetchHotelsByFind(checkIn, checkOut, location));
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(setHotels(json));
}

export function* hotelsWatcher() {
  yield takeEvery(FETCH_DEFAULT_HOTELS, fetchHotelsDefaultWorker);
  yield takeEvery(FETCH_FIND_HOTELS, fetchHotelsFindWorker);
}
