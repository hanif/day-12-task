const calc = require('../../../src/util/calculator');

test('Check if factorsOf function works as expected', () => {
  expect(calc.factorsOf(12)).toEqual([2, 6, 3, 4]);
  expect(calc.factorsOf(21)).toEqual([3, 7]);
});

test('Check if isPrime function works as expected', () => {
  expect(calc.isPrime(12)).toBeFalsy();
  expect(calc.isPrime(7)).toBeTruthy();
  expect(calc.isPrime(11)).toBeTruthy();
  expect(calc.isPrime(99)).toBeFalsy();
  expect(calc.isPrime(117)).toBeFalsy();
});
