export function getSquaredArray(arr) {
  return arr.map(num => num * num);
}

export function getOddNumbers(arr) {
  return arr.filter(elem => elem % 2 === 1);
}

export default (a, b) => a + b;
