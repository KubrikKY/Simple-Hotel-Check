import React from 'react';
import classes from './SearchInfo.module.scss';
import { monthRu } from '../../../../func/monthRu';
import { useSelector } from 'react-redux';
function SearchInfo() {
  const [checkIn, location] = useSelector((state) => [
    state.hotels.checkIn,
    state.hotels.location,
  ]);
  return (
    <div className={classes.SearchInfo}>
      <div className={classes.Location}>
        <h2>
          Отели <span>{'>'}</span> {location}
        </h2>
      </div>
      <span>{monthRu(checkIn)}</span>
    </div>
  );
}

export default SearchInfo;
