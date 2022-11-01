function getParsedIntegers(arr) {
  return arr.map(el => Number.parseInt(el));
}
function getParsedIntegersV2(arr) {
  return arr.map(el => parseInt(el));
}
function getParsedFloats(arr) {
  return arr.map(el => Number.parseFloat(el));
}
function getParsedFloatsV2(arr) {
  return arr.map(el => parseFloat(el));
}

// const numArray = [13, 8.5, 6, 'seven', Infinity, '17.1', 'alpha86', '0', 0, null, undefined, NaN];
// data tests

// getParsedIntegers(numArray);
// getParsedIntegersV2(numArray);
// getParsedFloats(numArray);
// getParsedFloatsV2(numArray);
