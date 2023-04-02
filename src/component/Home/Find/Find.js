import React from 'react';
import classes from './Find.module.scss';
import { useDispatch, useSelector } from 'react-redux';
function Find() {
  // TEST
  // const hotels = useSelector((state) => console.log(state.hotels));

  // TEST

  return (
    <div className={classes.FindSection}>
      <form className={classes.Find}>
        <label>
          <p>Локация</p>
          <input type="text" />
        </label>
        <label>
          <p>Дата заселения</p>
          <input type="date" />
        </label>
        <label>
          <p>Количество дней</p>
          <input type="number" />
        </label>
        <input type="submit" value="Найти" />
      </form>
    </div>
  );
}

export default Find;
