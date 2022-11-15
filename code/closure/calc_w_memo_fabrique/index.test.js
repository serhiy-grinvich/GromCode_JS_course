import { createCalculator } from './index';

it('should change memo if add() or decrease()', () => {
  const calculator = createCalculator();
  calculator.add(-9);
  expect(calculator.getMemo()).toEqual(-9);
  calculator.decrease(-18);
  expect(calculator.getMemo()).toEqual(9);
});
it('should return 0 if reset', () => {
  const calculator = createCalculator();
  calculator.add(-9);
  calculator.reset();
  expect(calculator.getMemo()).toEqual(0);
});

it('calc should be independent each other', () => {
  const calculator1 = createCalculator();
  const calculator2 = createCalculator();
  expect(calculator1).not.toEqual(calculator2);
});
