import { useSelector, useDispatch } from 'react-redux';
import { setOnlineAction } from './state/reducer/reducerUser';
import './App.css';
import { fetchDefaultHotels } from './state/reducer/reducerHotel';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';

import Home from './component/Home/Home';

import Login from './component/Login/Login';

function App() {
  const dispatch = useDispatch();
  const online = useSelector((state) => state.user.online);
  const onSuсcessLogin = (event) => {
    event.preventDefault();
    dispatch(fetchDefaultHotels());
    dispatch(setOnlineAction(true));
  };
  return (
    <div className="App">
      {/* WARNING SET NOT ONLINE */}
      {online ? <Home /> : <Login onSuсcessLogin={onSuсcessLogin} />}
    </div>
  );
}

export default App;
