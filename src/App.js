import { useSelector, useDispatch } from 'react-redux';
import { setOnlineAction } from './state/reducer/reducerUser';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import Home from './component/Home/Home';

import Login from './component/Login/Login';

function App() {
  const dispatch = useDispatch();
  const online = useSelector((state) => state.user.online);
  const onSuсcessLogin = (event) => {
    event.preventDefault();
    dispatch(setOnlineAction(true));
  };
  return (
    <div className="App">
      {online ? <Home /> : <Login onSuсcessLogin={onSuсcessLogin} />}
    </div>
  );
}

export default App;
