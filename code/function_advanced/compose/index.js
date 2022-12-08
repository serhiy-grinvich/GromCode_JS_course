const compose =
  (...funcs) =>
  value =>
    funcs.reduce((acc, currentFunc) => currentFunc(acc), value);

// test data
const add2 = value => value + 2;
const square = value => value ** 2;
const half = value => value / 2;
const doSomthng = compose(square, half, add2);
doSomthng(4); /// -- > 10
