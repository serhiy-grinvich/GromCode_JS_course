import { getEvenNumbers } from './index.js';

it("17 should be 17..it's all", () => {
  expect(17).toEqual(17);
});
it('крапка це не кома, а 18 - не 17', () => {
  expect(18).not.toEqual(17);
});
// function getEvenNumbers(arr) {
//   return arr.filter(elem => elem % 2 === 0);
// }
it('should get even num from array', () => {
  const result = getEvenNumbers([1, 2, 3, 5, 7, 8, 4]);
  expect(result).toEqual([2, 8, 4]);
});
