import { makeCounter } from './index';

it('should return 0 on first call', () => {
  const someCounter = makeCounter();
  const result = someCounter();
  expect(result).toEqual(0);
});

it('counters should be independent each other', () => {
  const someCounter1 = makeCounter();
  const someCounter2 = makeCounter();
  someCounter1();
  someCounter1();
  someCounter2();
  expect(someCounter1()).not.toEqual(someCounter2());
  someCounter2();
  expect(someCounter1()).toEqual(someCounter2());
});
