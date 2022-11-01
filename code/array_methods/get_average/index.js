function arrAverage(arr) {
  if (!Array.isArray(arr)) return null;
  return arr.reduce((acc, el) => acc + el) / arr.length;
}
// const someArr = [2, 5, 6, 3];
