import React, { useEffect } from 'react';
import classes from './FavouritesList.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addFavoritesFromLocalAction } from '../../../../state/reducer/reducerUser';
import FavouritesCard from '../FavouritesCard/FavouritesCard';
function FavouritesList() {
  const dispatch = useDispatch();
  const [login, favouritesHotels, hotels] = useSelector((state) => [
    state.user.login,
    state.user.favourites,
    state.hotels.hotels,
  ]);
  useEffect(() => {
    const dataFromLocal = JSON.parse(localStorage.getItem(login));
    if (dataFromLocal) {
      dispatch(addFavoritesFromLocalAction());
    }
  }, []);
  // const favouritesHotels = hotels.filter((hotel) =>
  //   favouritesHotelsId.includes(hotel.hotelId)
  // );
  return (
    <ul className={classes.FavouritesList}>
      {favouritesHotels.map((hotel) => {
        return (
          <FavouritesCard
            key={hotel.hotelId}
            id={hotel.hotelId}
            hotelName={hotel.hotelName}
            price={hotel.priceAvg}
            like={hotel}
          />
        );
      })}
    </ul>
  );
}

export default FavouritesList;
