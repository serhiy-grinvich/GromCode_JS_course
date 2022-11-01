import getMinSquaredNumber from './getMinSquaredNumber.js';

it('should return null from emty array', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it('should return null if argument is not array', () => {
  const result = getMinSquaredNumber('some string');
  expect(result).toEqual(null);
});

it('should return smallest squared number ', () => {
  const result = getMinSquaredNumber([23.681, -50, 17, -5]);
  expect(result).toEqual(25);
});
