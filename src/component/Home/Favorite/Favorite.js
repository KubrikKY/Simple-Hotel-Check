import React from 'react';
import classes from './Favorite.module.scss';
import SortBy from './SortBy/SortBy';
import FavouritesList from './FavouritesList/FavouritesList';
function Favorite() {
  return (
    <div className={classes.Favorite}>
      <h2>Избранное</h2>
      <SortBy />
      <FavouritesList />
    </div>
  );
}

export default Favorite;
