import React from 'react';
import classes from './FavouritesCard.module.scss';
import Like from '../Like/Like';
import { monthRu } from '../../../../func/monthRu';
import Stars from '../../Hotels/Stars/Stars';

function FavouritesCard({ hotelName, id, price, like, checkInfo, rating }) {
  const { checkIn, checkOut } = checkInfo;

  return (
    <li className={classes.HotelCard}>
      <div className={classes.HotelInfoBlock}>
        <div className={classes.HotelInfo}>
          <h4>{hotelName}</h4>
          <p className={classes.DateInfo}>
            <span>{monthRu(checkIn)}</span> - <span>{checkOut} дней</span>
          </p>
          <Stars rating={rating} />
        </div>
      </div>

      <div className={classes.HotelPrice}>
        <Like id={id} like={like} />
        <p>
          Price: <span>{price}</span>
        </p>
      </div>
    </li>
  );
}

export default FavouritesCard;
