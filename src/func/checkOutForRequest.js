export const checkOutForRequest = (checkIn, checkOut) => {
  const date = +checkIn.substr(-2, 2);
  const checkOutDate =
    date + +checkOut < 10 ? '0' + (date + +checkOut) : date + +checkOut;
  return checkIn.slice(0, -2) + checkOutDate;
};
