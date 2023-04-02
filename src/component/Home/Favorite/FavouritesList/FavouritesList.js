import React from 'react';
import classes from './FavouritesList.module.scss';
import { useSelector } from 'react-redux';
import FavouritesCard from '../HotelCard/FavouritesCard';
function FavouritesList() {
  const [favouritesHotelsId, hotels] = useSelector((state) => [
    state.user.favourites,
    state.hotels.hotels,
  ]);
  const favouritesHotels = hotels.filter((hotel) =>
    favouritesHotelsId.includes(hotel.id)
  );
  return (
    <ul className={classes.FavouritesList}>
      {favouritesHotels.map((hotel) => {
        return (
          <FavouritesCard key={hotel.id} id={hotel.id} label={hotel.label} />
        );
      })}
    </ul>
  );
}

export default FavouritesList;
