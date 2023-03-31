import { put, takeEvery, call } from 'redux-saga/effects';
import { FETCH_USERS, setUsers } from '../state/reducer/reducerHotel';

const fetchUsersFromApi = fetch('https://jsonplaceholder.typicode.com/users');

function* fetchHotelsWorker() {
  const data = yield call(fetchUsersFromApi);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(setUsers(json));
}

export function* hotelsWatcher() {
  yield takeEvery(FETCH_USERS, fetchHotelsWorker);
}
