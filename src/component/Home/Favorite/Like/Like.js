import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Like.module.scss';
import {
  addFavoritesAction,
  deleteFavoritesAction,
} from '../../../../state/reducer/reducerUser';
function Like({ id, like }) {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.user.favourites);
  const LikeToggle = () => {
    if (!favourites.find((e) => e.hotelId === id)) {
      dispatch(addFavoritesAction(like));
    } else {
      dispatch(deleteFavoritesAction(like));
    }
  };
  return <div className={classes.Like} onClick={LikeToggle}></div>;
}

export default Like;
