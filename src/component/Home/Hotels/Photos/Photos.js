import React from 'react';
import classes from './Photos.module.scss';

function Photos() {
  return (
    <div className={classes.Photos}>
      <div className={classes.LocationsPhotosBlock}>
        <div className={classes.LocationPhoto}>#IMAGE</div>
        <div className={classes.LocationPhoto}>#IMAGE</div>
        <div className={classes.LocationPhoto}>#IMAGE</div>
        <div className={classes.LocationPhoto}>#IMAGE</div>
        <div className={classes.LocationPhoto}>#IMAGE</div>
        <div className={classes.LocationPhoto}>#IMAGE</div>
        <div className={classes.LocationPhoto}>#IMAGE</div>
        <div className={classes.LocationPhoto}>#IMAGE</div>
      </div>
    </div>
  );
}

export default Photos;
