import React from 'react';
import classes from './Home.module.scss';
import { Navigate } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Main/Main';

function Home({ userLogin }) {
  if (!userLogin) {
    return <Navigate to={'/login'} />;
  }

  return (
    <div className={classes.Home}>
      <Header />
      <Main />
    </div>
  );
}

export default Home;
