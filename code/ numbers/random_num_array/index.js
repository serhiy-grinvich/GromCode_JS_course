'use strict';

/**
 * @param {number} length
 * @param {number} from
 * @param {number} to
 * @return {number[]}
 */

const getRandomNumbers = (length, from, to) => {
  const min = Math.ceil(from);
  const max = Math.floor(to);
  if (Math.floor(from) >= Math.floor(to)) return null;

  return Array(length)
    .fill()
    .map(elem => {
      return (elem = Math.floor(Math.random() * (max - min + 1) + min));
    });
};

// examples
getRandomNumbers(5, 1.4, 3.22); // ==> [2, 2, 2, 3, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]
getRandomNumbers(3, 2.4, 4.5); // ==> [4, 3, 4]
getRandomNumbers(3, 1.9, 2.5); // ==> [2, 2, 2]

getRandomNumbers(7, 1.4, 1.9); // ==> null
getRandomNumbers(7, 2.11, 2.9); // ==> null
getRandomNumbers(1, 2.5, 0.9); // ==> null
