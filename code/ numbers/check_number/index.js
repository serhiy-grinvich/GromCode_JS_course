function getFiniteNumbers(arr) {
  return arr.filter(num => Number.isFinite(num));
}
function getFiniteNumbersV2(arr) {
  return arr.filter(num => isFinite(num));
}
function getNaN(arr) {
  return arr.filter(num => Number.isNaN(num));
}
function getNaNV2(arr) {
  return arr.filter(num => isNaN(num));
}
function getIntegers(arr) {
  return arr.filter(num => Number.isInteger(num));
}

// // data tests
// const numArray = [13, 8.5, 6, 'seven', Infinity, '17.1', 'alpha86', '0', 0, null, undefined, NaN];
// getFiniteNumbers(numArray);
// getFiniteNumbersV2(numArray);
// getNaN(numArray);
// getNaNV2(numArray);
// getIntegers(numArray);
