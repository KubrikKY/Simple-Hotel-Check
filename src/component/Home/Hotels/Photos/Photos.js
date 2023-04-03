import React from 'react';
import classes from './Photos.module.scss';
import { useSelector } from 'react-redux';
function Photos() {
  const photos = useSelector((state) => state.hotels.hotelsPhotoURL);
  return (
    <div className={classes.Photos}>
      <div className={classes.LocationsPhotosBlock}>
        {photos.map((photo, i) => {
          return (
            <img
              className={classes.LocationPhoto}
              src={photo}
              alt="Hotel"
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Photos;
