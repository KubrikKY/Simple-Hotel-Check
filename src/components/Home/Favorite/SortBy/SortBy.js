import React, { useState, useEffect } from 'react';
import classes from './SortBy.module.scss';
function SortBy({ selectSort, sortBy }) {
  const [clsSortIconPrice, setClsSortIconPrice] = useState([classes.Direction]);
  const [clsSortIconRating, setClsSortIconRating] = useState([
    classes.Direction,
  ]);
  const [clsLabelPrice, setClsLabelPrice] = useState([classes.SortBy]);
  const [clsLabelRating, setClsLabelRating] = useState([classes.SortBy]);

  useEffect(() => {
    switch (sortBy.property) {
      case 'stars':
        setClsLabelRating([...clsLabelPrice, classes.SelectOrder]);
        setClsLabelPrice([classes.SortBy]);
        if (sortBy.order) {
          setClsSortIconRating([classes.Direction]);
        } else {
          setClsSortIconRating([...clsSortIconPrice, classes.RotateDirection]);
        }
        break;
      case 'priceAvg':
        setClsLabelPrice([...clsLabelPrice, classes.SelectOrder]);
        setClsLabelRating([classes.SortBy]);
        if (sortBy.order) {
          setClsSortIconPrice([classes.Direction]);
        } else {
          setClsSortIconPrice([...clsSortIconPrice, classes.RotateDirection]);
        }
        break;
      default:
    }
  }, [sortBy]);

  const onSort = (input) => {
    selectSort({ property: input.name, order: input.checked });
  };

  return (
    <div className={classes.SortByBlock}>
      <label className={clsLabelRating.join(' ')}>
        Рейтинг
        <div className={clsSortIconRating.join(' ')}></div>
        <input
          type="checkbox"
          name="stars"
          onChange={(e) => onSort(e.target)}
        />
      </label>
      <label className={clsLabelPrice.join(' ')}>
        Цена
        <div className={clsSortIconPrice.join(' ')}></div>
        <input
          type="checkbox"
          name="priceAvg"
          onChange={(e) => onSort(e.target)}
        />
      </label>
    </div>
  );
}

export default SortBy;
