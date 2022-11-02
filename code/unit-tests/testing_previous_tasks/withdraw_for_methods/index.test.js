import { withdraw } from './index.js';

it('should return -1 if amount > balance', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
  expect(result).toEqual(-1);
});

it('should return balance after transaction', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 50);
  expect(result).toEqual(1350);
});

it("should change client's balance after transaction ", () => {
  const balances = [1400, 87, -6];
  const result = withdraw(['Ann', 'John', 'User'], balances, 'Ann', 50);
  expect(balances).toEqual([result, 87, -6]);
  expect(balances).not.toEqual([1400, 87, -6]);
});

it("should  not change client's balance if not enough money ", () => {
  const balances = [1400, 87, -6];
  const result = withdraw(['Ann', 'John', 'User'], balances, 'User', 50);
  expect(balances).toEqual(balances);
  expect(balances).toEqual([1400, 87, -6]);
});
