import React from 'react';
import classes from './SortBy.module.scss';
function SortBy({ selectSort, sortBy }) {
  return (
    <div className={classes.SortByBlock}>
      <label className={classes.SortBy}>
        Рейтинг
        <input type="checkbox" />
      </label>
      <label className={classes.SortBy}>
        Цена
        <input type="checkbox" />
      </label>
    </div>
  );
}

export default SortBy;
