import { reverseArray } from './index.js';

it('should array in argument, else returns null', () => {
  const result = reverseArray('string');
  expect(result).toEqual(null);
});

it('should return reversed array', () => {
  const result = reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  expect(result).toEqual([0, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
});

it('should not change original array', () => {
  const someArr = ['string', 12, { 1: 7 }, null];
  const result = reverseArray(someArr);
  expect(result).not.toEqual(someArr);
});
