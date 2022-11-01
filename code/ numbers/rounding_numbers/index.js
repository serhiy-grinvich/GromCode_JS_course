'use strict';

/**
 * @param {number} num
 * @return {number[]}
 */
const multiRound = num => {
  const resultArr = [];
  resultArr.push(Math.floor(num * 100) / 100);
  resultArr.push(Math.trunc(num * 100) / 100);
  resultArr.push(Math.ceil(num * 100) / 100);
  resultArr.push(Math.round(num * 100) / 100);
  resultArr.push(Number(num.toFixed(2)));
  return resultArr;
};

// examples
multiRound(11.12556); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
multiRound(6.112); // ==> [6.11, 6.11, 6.12, 6.11, 6.11]
