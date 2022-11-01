//
// 1.check requirements
// 2.turn each num in array to absolute
// 3.get min number from that
// 4.get square of min number
export default arr => {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  const arrOfAbsol = arr.map(el => Math.abs(el));
  return Math.min(...arrOfAbsol) ** 2;
};
