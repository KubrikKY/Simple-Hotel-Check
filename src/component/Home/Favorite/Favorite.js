import React, { useState } from 'react';
import classes from './Favorite.module.scss';
import SortBy from './SortBy/SortBy';
import FavouritesList from './FavouritesList/FavouritesList';
function Favorite() {
  const [sortBy, setSortBy] = useState({
    property: 'stars',
    order: 'ascending',
  });
  const selectSortBy = (value) => {
    setSortBy(value);
  };
  return (
    <div className={classes.Favorite}>
      <h2>Избранное</h2>
      <SortBy selectSort={selectSortBy} sortBy={sortBy} />
      <FavouritesList sort={sortBy} />
    </div>
  );
}

export default Favorite;
