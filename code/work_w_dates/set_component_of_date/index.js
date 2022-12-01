function dayOfWeek(date, days) {
  const week = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];
  const currentDate = new Date(date).getDate();
  const futureDay = new Date(date).setDate(currentDate + days);
  return week[new Date(futureDay).getDay()];
}
// algo
// create arr of days
// get day of week from date
// sum with 'days'
// find day by index
