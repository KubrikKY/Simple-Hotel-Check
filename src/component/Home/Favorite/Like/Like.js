import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Like.module.scss';
import {
  addFavoritesAction,
  deleteFavoritesAction,
} from '../../../../state/reducer/reducerUser';
function Like({ id }) {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.user.favourites);
  console.log(favourites);
  const LikeToggle = () => {
    if (!favourites.includes(id)) {
      dispatch(addFavoritesAction(id));
    } else {
      dispatch(deleteFavoritesAction(id));
    }
  };
  return <div className={classes.Like} onClick={LikeToggle}></div>;
}

export default Like;
