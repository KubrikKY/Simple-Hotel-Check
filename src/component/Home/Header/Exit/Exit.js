import React from 'react';
import classes from '../Header.module.scss';
import { useDispatch } from 'react-redux';

import { logOutAction } from '../../../../state/reducer/reducerUser';
function Exit() {
  const dispatch = useDispatch();
  const onExit = (event) => {
    event.preventDefault();
    localStorage.clear();

    dispatch(logOutAction());
  };
  return (
    <button className={classes.Exit} onClick={onExit}>
      <p>Выйти</p>
      <div className={classes.ExitIcon}></div>
    </button>
  );
}

export default Exit;
