import React from 'react';
import { useSelector } from 'react-redux';
import HotelCard from '../HotelCard/HotelCard';
import classes from './HotelsList.module.scss';
function HotelsList() {
  const [hotels, locations] = useSelector((state) => [
    state.hotels.hotels,
    state.hotels.locations,
  ]);
  console.log(hotels);
  console.log(locations);

  return (
    <ul className={classes.HotelsList}>
      {hotels.map((hotel) => {
        return <HotelCard key={hotel.id} id={hotel.id} label={hotel.label} />;
      })}
    </ul>
  );
}

export default HotelsList;
