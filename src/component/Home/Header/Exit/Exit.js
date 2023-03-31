import React from 'react';
import classes from '../Header.module.scss';
function Exit() {
  return (
    <div className={classes.Exit}>
      <p>Выйти</p>
      <div className={classes.ExitIcon}></div>
    </div>
  );
}

export default Exit;
