import { put, takeEvery, call } from 'redux-saga/effects';
import { FETCH_DEFAULT_HOTELS, setHotels } from '../state/reducer/reducerHotel';

const fetchHotelsFromApi = () =>
  fetch(
    'http://engine.hotellook.com/api/v2/lookup.json?query=moscow&lang=ru&lookFor=both&limit=10'
  );

//TEST
const fetchHotels = () => {
  fetch(
    'http://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=2023-03-04&checkOut=2023-03-12&limit=10'
  );
};
//TEST

export function* fetchHotelsDefaultWorker() {
  const data = yield call(fetchHotelsFromApi);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(setHotels(json));
}

export function* hotelsWatcher() {
  yield takeEvery(FETCH_DEFAULT_HOTELS, fetchHotelsDefaultWorker);
}
