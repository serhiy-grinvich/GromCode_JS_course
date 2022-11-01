const someArr = [1, 3, 33, [6, 7, [9, 98, 67], 9], 37, [48, 27]];
const flatArray = arr => {
  return arr.flat(Infinity).sort((a, b) => a - b);
};

console.log(flatArray(someArr));
