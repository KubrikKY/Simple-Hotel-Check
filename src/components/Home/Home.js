import React from 'react';
import classes from './Home.module.scss';

import Header from './Header/Header';
import Main from './Main/Main';

function Home() {
  return (
    <div className={classes.Home}>
      <Header />
      <Main />
    </div>
  );
}

export default Home;
