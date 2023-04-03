export const dateNow = () => {
  const date = new Date();
  const curr_year = date.getFullYear(),
    curr_month =
      date.getMonth() < 10
        ? '0' + (+date.getMonth() + 1)
        : +date.getMonth() + 1,
    curr_date = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

  return curr_year + '-' + curr_month + '-' + curr_date;
};
