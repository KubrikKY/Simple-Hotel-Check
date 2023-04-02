import React from 'react';
import classes from './Hotels.module.scss';
import HotelsList from './HotelsList/HotelsList';
import SearchInfo from './SearchInfo/SearchInfo';
import Photos from './Photos/Photos';
import { useSelector } from 'react-redux';
function Hotels() {
  const hotels = useSelector((state) => state.hotels);
  console.log(hotels);
  return (
    <div className={classes.HotelsSection}>
      <SearchInfo />
      <Photos />
      <HotelsList />
    </div>
  );
}

export default Hotels;
