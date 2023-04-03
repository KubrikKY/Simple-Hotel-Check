import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Like.module.scss';
import {
  addFavoritesAction,
  deleteFavoritesAction,
} from '../../../../store/reducer/reducerUser';
function Like({ id, like }) {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.user.favourites);
  const [cls, setCls] = useState([classes.Like]);

  useEffect(() => {
    if (!favourites.find((e) => e.hotelId === id)) {
      setCls([classes.Like]);
    } else {
      setCls([...cls, classes.Select]);
    }
  }, [favourites]);

  const LikeToggle = () => {
    if (!favourites.find((e) => e.hotelId === id)) {
      dispatch(addFavoritesAction(like));
    } else {
      dispatch(deleteFavoritesAction(like));
    }
  };
  return <div className={cls.join(' ')} onClick={LikeToggle}></div>;
}

export default Like;
