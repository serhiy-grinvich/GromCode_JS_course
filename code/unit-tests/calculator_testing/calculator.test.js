import { calc } from './calculator.js';

it('check syntax, it must be "A + B"', () => {
  const result = calc('14 + 28');
  expect(result).toEqual('14 + 28 = 42');
});

it('check syntax, it must be "A - B"', () => {
  const result = calc('9 - 4');
  expect(result).toEqual('9 - 4 = 5');
});

it('check syntax, it must be "A * B"', () => {
  const result = calc('3 * 8');
  expect(result).toEqual('3 * 8 = 24');
});

it('check syntax, it must be "A / B"', () => {
  const result = calc('64 / 8');
  expect(result).toEqual('64 / 8 = 8');
});

it('expression in argument must be string', () => {
  const result = calc(null);
  expect(result).toEqual(0);
});

it('expression in argument must be string', () => {
  const result = calc(12);
  expect(result).toEqual(null);
});
it('expression in argument must be string', () => {
  const result = calc(undefined);
  expect(result).toEqual(null);
});

it('expression in argument must be string', () => {
  const result = calc(true);
  expect(result).toEqual(null);
});
