import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NotFound.module.scss';
function NotFound() {
  return (
    <div className={classes.NotFound}>
      <div className={classes.WhiteShadow}>
        <div className={classes.NotFoundWindow}>
          <h1 style={{ marginBottom: '20px' }}>Not found</h1>
          <Link to="/">To Home</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
