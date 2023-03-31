import React from 'react';
import classes from './Main.module.scss';

import Header from './Header/Header';
import Main from './Main/Main';

function Home() {
  return (
    <div className={classes.Main}>
      <Header />
      <Main />
    </div>
  );
}

export default Home;
