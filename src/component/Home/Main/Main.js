import React from 'react';
import classes from './Main.module.scss';

import Hotels from '../Hotels/Hotels';
import Favorite from '../Favorite/Favorite';
import Find from '../Find/Find';
function Main() {
  return (
    <main className={classes.Main}>
      <div className={classes.locationFavorite}>
        <Find />
        <Favorite />
      </div>
      <Hotels />
    </main>
  );
}

export default Main;
