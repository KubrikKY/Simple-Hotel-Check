import React, { useEffect } from 'react';
import classes from './FavouritesList.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addFavoritesFromLocalAction } from '../../../../state/reducer/reducerUser';
import FavouritesCard from '../FavouritesCard/FavouritesCard';
function FavouritesList({ sort }) {
  const dispatch = useDispatch();
  const [login, favouritesHotels] = useSelector((state) => [
    state.user.login,
    state.user.favourites,
  ]);
  useEffect(() => {
    const dataFromLocal = JSON.parse(localStorage.getItem(login));
    if (dataFromLocal) {
      dispatch(addFavoritesFromLocalAction());
    }
  }, []);

  const sortHotels = [...favouritesHotels];
  switch (sort.order) {
    case true:
      sortHotels.sort((a, b) => (a[sort.property] > b[sort.property] ? 1 : -1));
      break;
    case false:
      sortHotels.sort((a, b) => (b[sort.property] > a[sort.property] ? 1 : -1));
      break;
    default:
  }

  return (
    <ul className={classes.FavouritesList}>
      {sortHotels.map((hotel) => {
        return (
          <FavouritesCard
            key={hotel.hotelId}
            id={hotel.hotelId}
            hotelName={hotel.hotelName}
            price={hotel.priceAvg}
            like={hotel}
            checkInfo={hotel.checkInfo}
            rating={hotel.stars}
          />
        );
      })}
    </ul>
  );
}

export default FavouritesList;
