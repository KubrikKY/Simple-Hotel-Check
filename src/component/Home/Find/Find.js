import React from 'react';
import classes from './Find.module.scss';
function Find() {
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
