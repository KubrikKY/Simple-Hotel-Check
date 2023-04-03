import { useSelector, useDispatch } from 'react-redux';
import { setOnlineAction, setLoginAction } from './store/reducer/reducerUser';
import './App.css';
import { fetchFindHotels } from './store/reducer/reducerHotel';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/Home/Home';

import Login from './components/Login/Login';

function App() {
  const dispatch = useDispatch();
  const [user, checkIn, checkOut, location] = useSelector((state) => [
    state.user,
    state.hotels.checkIn,
    state.hotels.checkOut,
    state.hotels.location,
  ]);

  const onSuсcessLogin = () => {
    if (!localStorage.getItem(user.login)) {
      localStorage.setItem(
        user.login,
        JSON.stringify({ favourites: [], online: true })
      );
    }
    dispatch(fetchFindHotels({ checkIn, checkOut, location }));
    dispatch(setOnlineAction(true));
  };

  useEffect(() => {
    if (localStorage.length) {
      for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
          const dataFromLocal = JSON.parse(localStorage.getItem(key));
          dispatch(fetchFindHotels({ checkIn, checkOut, location }));
          dispatch(setLoginAction(dataFromLocal.login));
          dispatch(setOnlineAction(true));
        }
      }
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={'/'} element={<Home userLogin={user.online} />} />
          <Route
            path={'/login'}
            element={
              <Login onSuсcessLogin={onSuсcessLogin} userLogin={user.online} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
