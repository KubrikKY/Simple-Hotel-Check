const months = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];
export const monthRu = (date) => {
  const month = date.slice(5, 7);
  return `${date.substr(-2, 2)} ${months[month - 1]} ${date.slice(0, 4)}`;
};
