import getSum, { getOddNumbers, getSquaredArray } from './calculator.js';

it('should get odd num from array', () => {
  const result = getOddNumbers([1, 2, 3, 5, 7, 8, 4]);
  expect(result).toEqual([1, 3, 5, 7]);
});

it('should get squared array of numbers', () => {
  const result = getSquaredArray([2, 1, 5, 12, 3]);
  expect(result).toEqual([4, 1, 25, 144, 9]);
});

it('should get sum of numbers', () => {
  const result = getSum(15, 17);
  expect(result).toEqual(32);
});
