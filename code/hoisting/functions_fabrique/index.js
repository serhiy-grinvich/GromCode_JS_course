const createArrayOfFunctions = function (num) {
  if (num === undefined) return [];
  if (typeof num !== 'number') return null;
  return Array(num)
    .fill()
    .map((el, index) => {
      return function () {
        return index;
      };
    });
};
// const resultArr = createArrayOfFunctions(4);
// createArrayOfFunctions(7)[5]();
