function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) return null;
  return arr.filter(el => el % 2 === 0).map(num => num + delta);
}
// expls
// increaseEvenEl([4, 8, 9, 3, 1], 5); // ==> [9, 13]
// increaseEvenEl([2, 7, 5, 8, 44, 56, 9], 10); // ==> [12,18,54,66]
