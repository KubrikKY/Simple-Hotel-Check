import React from 'react';
import classes from './Hotels.module.scss';
import HotelsList from './HotelsList/HotelsList';
import SearchInfo from './SearchInfo/SearchInfo';
import Photos from './Photos/Photos';
function Hotels() {
  return (
    <div className={classes.HotelsSection}>
      <SearchInfo />
      <Photos />
      <HotelsList />
    </div>
  );
}

export default Hotels;
