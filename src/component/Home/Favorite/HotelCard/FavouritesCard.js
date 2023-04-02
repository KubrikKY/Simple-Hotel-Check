import React from 'react';
import classes from './HotelCard.module.scss';
import Like from '../Like/Like';
function FavouritesCard({ label, id }) {
  return (
    <li className={classes.HotelCard}>
      <div className={classes.HotelInfoBlock}>
        <div className={classes.HotelInfo}>
          <h4>{label}</h4>
          <p>
            <span>#DATE</span> - <span>#DAYS</span>
          </p>
        </div>
      </div>

      <div className={classes.HotelPrice}>
        <Like id={id} />
        <p>
          Price:<span>#PRICE</span>
        </p>
      </div>
    </li>
  );
}

export default FavouritesCard;
