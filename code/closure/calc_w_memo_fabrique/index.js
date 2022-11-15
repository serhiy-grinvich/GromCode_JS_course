export const createCalculator = () => {
  let memo = 0;
  const add = function (num) {
    memo += num;
  };
  const decrease = function (num) {
    memo -= num;
  };
  const reset = function () {
    memo = 0;
  };
  const getMemo = function () {
    return memo;
  };
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

// const calc1 = createCalculator();
// const calc2 = createCalculator();
// console.log(calc1.decrease(9));
// console.log(calc1.getMemo());
// console.log(calc2.getMemo());
// console.log(calc2.add(48));
// console.log(calc2.getMemo());
// console.log(calc1.getMemo());
