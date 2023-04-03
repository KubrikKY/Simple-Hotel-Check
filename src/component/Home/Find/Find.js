import React, { useState } from 'react';
import classes from './Find.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCheckIn,
  selectCheckOut,
  selectLocation,
  fetchFindHotels,
} from '../../../state/reducer/reducerHotel';
import { dateNow } from '../../../func/dateNow';
import { compareDate } from '../../../func/compareDate';

function Find() {
  const dispatch = useDispatch();
  const [checkIn, checkOut, location] = useSelector((state) => [
    state.hotels.checkIn,
    state.hotels.checkOut,
    state.hotels.location,
  ]);
  const [noCity, setNoCity] = useState(false);

  const onFind = (event) => {
    event.preventDefault();
    if (location) {
      setNoCity(false);
      dispatch(fetchFindHotels({ checkIn, checkOut, location }));
    } else {
      setNoCity(true);
    }
  };

  const selectLocate = (value) => {
    if (/^[a-zа-яё\-\s]+$/i.test(value) || value === '') {
      if (value === '') {
        setNoCity(true);
      }
      dispatch(selectLocation(value));
    }
  };

  const selectDate = (value) => {
    if (compareDate(value, dateNow())) {
      dispatch(selectCheckIn(value));
    }
  };

  const selectCurrentDays = (value) => {
    if (+value) {
      dispatch(selectCheckOut(value));
    }
  };

  return (
    <div className={classes.FindSection}>
      <form className={classes.Find} onSubmit={onFind}>
        <label>
          <p>Локация</p>
          <input
            type="text"
            value={location}
            onChange={(e) => selectLocate(e.target.value)}
          />
          {noCity && <span>Укажите город</span>}
        </label>
        <label>
          <p>Дата заселения</p>
          <input
            type="date"
            onChange={(e) => selectDate(e.target.value)}
            value={checkIn}
          />
        </label>
        <label>
          <p>Количество дней</p>
          <input
            type="number"
            value={checkOut}
            onChange={(e) => selectCurrentDays(e.target.value)}
          />
        </label>
        <input type="submit" value="Найти" />
      </form>
    </div>
  );
}

export default Find;
