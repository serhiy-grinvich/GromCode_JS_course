// function getDiff(startDate, endDate) {
//   const diff = Math.abs(endDate - startDate) / 1000;
//   const days = Math.trunc(diff / 86400);
//   const hours = Math.trunc((diff % 86400) / 3600);
//   const min = Math.trunc((diff % 3600) / 60);
//   const sec = Math.trunc(diff % 60);
//   return `${days}d ${hours}h ${min}m ${sec}s`;
// }

function getDiff(startDate, endDate) {
  const diff = new Date(endDate > startDate ? endDate - startDate : startDate - endDate);
  // console.log(diff);
  return `${Math.trunc(
    diff.getTime() / (86400 * 1000),
  )}d ${diff.getUTCHours()}h ${diff.getUTCMinutes()}m ${diff.getUTCSeconds()}s`;
}

// algo
// get diff beetween dates in ms
// format it

// test data
const start1 = new Date(2022, 10, 27, 13, 12, 2);
const end1 = new Date(2022, 11, 27, 14, 32, 0);
