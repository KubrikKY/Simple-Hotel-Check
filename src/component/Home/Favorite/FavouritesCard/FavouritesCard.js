import React from 'react';
import classes from './HotelCard.module.scss';
import Like from '../Like/Like';
import { useSelector } from 'react-redux';
import { monthRu } from '../../../../func/monthRu';

function FavouritesCard({ hotelName, id, price, like }) {
  const [checkIn, checkOut] = useSelector((state) => [
    state.hotels.checkIn,
    state.hotels.checkOut,
  ]);
  return (
    <li className={classes.HotelCard}>
      <div className={classes.HotelInfoBlock}>
        <div className={classes.HotelInfo}>
          <h4>{hotelName}</h4>
          <p>
            <span>{monthRu(checkIn)}</span> - <span>{checkOut} дней</span>
          </p>
        </div>
      </div>

      <div className={classes.HotelPrice}>
        <Like id={id} like={like} />
        <p>
          Price:<span>{price}</span>
        </p>
      </div>
    </li>
  );
}

export default FavouritesCard;
