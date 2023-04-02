import { useSelector, useDispatch } from 'react-redux';
import { setOnlineAction, setLoginAction } from './state/reducer/reducerUser';
import './App.css';
import { fetchDefaultHotels } from './state/reducer/reducerHotel';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './component/Home/Home';

import Login from './component/Login/Login';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const onSuсcessLogin = (event) => {
    event.preventDefault();
    if (!localStorage.getItem(user.login)) {
      localStorage.setItem(
        user.login,
        JSON.stringify({ favourites: [], online: true })
      );
    }
    dispatch(fetchDefaultHotels());
    dispatch(setOnlineAction(true));
  };

  useEffect(() => {
    if (localStorage.key(0)) {
      for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
          const dataFromLocal = JSON.parse(localStorage.getItem(key));
          dispatch(fetchDefaultHotels());
          dispatch(setLoginAction(dataFromLocal.login));
          dispatch(setOnlineAction(true));
        }
      }
    }
  }, []);

  return (
    <div className="App">
      {/* WARNING SET NOT ONLINE */}
      {user.online ? <Home /> : <Login onSuсcessLogin={onSuсcessLogin} />}
    </div>
  );
}

export default App;
