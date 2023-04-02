import React, { useEffect } from 'react';
import classes from './FavouritesList.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addFavoritesFromLocalAction } from '../../../../state/reducer/reducerUser';
import FavouritesCard from '../HotelCard/FavouritesCard';
function FavouritesList() {
  const dispatch = useDispatch();
  const [login, favouritesHotelsId, hotels] = useSelector((state) => [
    state.user.login,
    state.user.favourites,
    state.hotels.hotels,
  ]);
  useEffect(() => {
    if (localStorage.key(login).length) {
      dispatch(addFavoritesFromLocalAction());
    }
  }, []);
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
