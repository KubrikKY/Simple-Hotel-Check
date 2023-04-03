import { put, takeEvery, call } from 'redux-saga/effects';
import { FETCH_FIND_HOTELS, setHotels } from '../state/reducer/reducerHotel';
import { checkOutForRequest } from '../func/checkOutForRequest';

const fetchHotelsByFind = ({ checkIn, checkOut, location }) => {
  const checkOutRequest = checkOutForRequest(checkIn, checkOut);
  return fetch(
    `https://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOutRequest}&limit=10`
  );
};

function* fetchHotelsFindWorker(checkIn, checkOut, location) {
  const data = yield call(() => fetchHotelsByFind(checkIn, checkOut, location));
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(setHotels(json, checkIn, checkOut));
}

export function* hotelsWatcher() {
  yield takeEvery(FETCH_FIND_HOTELS, fetchHotelsFindWorker);
}
