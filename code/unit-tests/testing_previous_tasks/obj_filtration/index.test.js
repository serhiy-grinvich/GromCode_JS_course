import { getAdults } from './index.js';

it('should return empty obj for empty', () => {
  const result = getAdults({});
  expect(result).toEqual({});
});

it('should return adult persons only', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should not change original object', () => {
  const someObj = { 'John Doe': 19, Bob: 18 };
  const result = getAdults(someObj);
  expect(false).toEqual(someObj === result);
});
