import React from 'react';
import classes from './SearchInfo.module.scss';

function SearchInfo() {
  return (
    <div className={classes.SearchInfo}>
      <div className={classes.Location}>
        <h2>Отели</h2>
        <span>'BREADCRUMBS'</span>
        <h2>#LOCATION</h2>
      </div>
      <span>#DATE</span>
    </div>
  );
}

export default SearchInfo;
