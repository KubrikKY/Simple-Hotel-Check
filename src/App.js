import { useSelector, useDispatch } from 'react-redux';
import { setOnlineAction, setLoginAction } from './state/reducer/reducerUser';
import './App.css';
import { fetchFindHotels } from './state/reducer/reducerHotel';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './component/Home/Home';

import Login from './component/Login/Login';

function App() {
  const dispatch = useDispatch();
  const [user, checkIn, checkOut, location] = useSelector((state) => [
    state.user,
    state.hotels.checkIn,
    state.hotels.checkOut,
    state.hotels.location,
  ]);
  const onSuсcessLogin = (event) => {
    event.preventDefault();
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
    <div className="App">
      {user.online ? <Home /> : <Login onSuсcessLogin={onSuсcessLogin} />}
    </div>
  );
}

export default App;
