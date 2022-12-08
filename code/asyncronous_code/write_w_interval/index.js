'use strict';

/**
 * @param {number} count
 * @param {number} period
 * @return {undefined}
 */
// export

const pinger = (count, period) => {
  let num = count;
  console.log('Ping');
  const intervalId = setInterval(() => {
    if (--num > 0) {
      console.log('Ping');
    } else {
      clearInterval(intervalId);
    }
  }, period);
  //   setTimeout(() => clearInterval(intervalId), (count - 1) * period);
};
//
// or:
//
// const pinger = (count, period) => {
//   console.log('Ping');
//   const intervalId = setInterval(() => {
//     console.log('Ping');
//   }, period);
//   setTimeout(() => clearInterval(intervalId), (count - 1) * period);
// };
// examples
// pinger(5, 100); // makes 5 writes with 100 ms interval
pinger(16, 150); // makes 7 writes with 1500 ms interval
