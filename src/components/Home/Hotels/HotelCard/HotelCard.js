import React from 'react';
import classes from './HotelCard.module.scss';
import Like from '../../Favorite/Like/Like';
import { monthRu } from '../../../../utils/monthRu';
import Stars from '../Stars/Stars';

function HotelCard({ hotelName, id, price, like, checkInfo, rating }) {
  const { checkIn, checkOut } = checkInfo;

  return (
    <li className={classes.HotelCard}>
      <div className={classes.HotelInfoBlock}>
        <div className={classes.HotelIcon}></div>
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
        <div className={classes.Price}>
          <p>Price:</p>
          <span>{price}</span>
        </div>
      </div>
    </li>
  );
}

export default HotelCard;
