const calc = initialValue => {
  let result = initialValue;
  const calculatorObj = {
    add(num) {
      result += num;
      return this;
    },
    mult(num) {
      result *= num;
      return this;
    },
    subtract(num) {
      result -= num;
      return this;
    },
    div(num) {
      result /= num;
      return this;
    },
    result() {
      return result;
    },
  };
  return calculatorObj;
};

///
// test data
calc(3).add(2).mult(4).div(10).substract(5).result();
