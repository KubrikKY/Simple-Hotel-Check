const getYear = (date) => {
  return date.slice(0, 4);
};
const getMonth = (date) => {
  return date.slice(5, 7);
};
const getDay = (date) => {
  return date.substr(-2, 2);
};

export const compareDate = (dateA, dateB) => {
  const yearCompare = getYear(dateA) >= getYear(dateB);
  const monthCompare = getMonth(dateA) >= getMonth(dateB);
  const dayCompare =
    getMonth(dateA) === getMonth(dateB) ? getDay(dateA) >= getDay(dateB) : true;
  return yearCompare && monthCompare && dayCompare;
};
