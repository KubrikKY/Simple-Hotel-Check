import React from 'react';
import classes from './Stars.module.scss';
function Stars({ rating }) {
  let ratingStars = [];
  for (let i = 0; i < 5; i++) {
    if (rating > i) {
      ratingStars.push(classes.GoldStar);
    } else {
      ratingStars.push(classes.GreyStar);
    }
  }
  return (
    <div className={classes.Stars}>
      {ratingStars.map((star, i) => {
        return <div key={i} className={[classes.Star, star].join(' ')}></div>;
      })}
    </div>
  );
}

export default Stars;
