import React from 'react';
import { useSelector } from 'react-redux';
import HotelCard from '../HotelCard/HotelCard';
import classes from './HotelsList.module.scss';
function HotelsList() {
  const [hotels, countFavourites] = useSelector((state) => [
    state.hotels.hotels,
    state.user.favourites.length,
  ]);

  return (
    <>
      {countFavourites ? (
        <p className={classes.FavouritesLength}>
          Добавлено в Избранное: <span>{countFavourites}</span> отеля
        </p>
      ) : (
        <p className={classes.FavouritesLength}>В избранном нет отелей</p>
      )}

      <ul className={classes.HotelsList}>
        {hotels.map((hotel) => {
          return (
            <HotelCard
              key={hotel.hotelId}
              id={hotel.hotelId}
              like={hotel}
              hotelName={hotel.hotelName}
              price={hotel.priceAvg}
              checkInfo={hotel.checkInfo}
            />
          );
        })}
      </ul>
    </>
  );
}

export default HotelsList;
