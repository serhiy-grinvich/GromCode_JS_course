function sumOfSquares() {
  // eslint-disable-next-line prefer-rest-params
  return Array.from(arguments).reduce((acc, el) => {
    // console.log('acc:', acc);
    // console.log('el:', el);
    // eslint-disable-next-line no-return-assign, no-param-reassign
    return (acc += el ** 2);
  }, 0);
}
// or:
// return [...arguments].reduce((acc, el) => {
//   console.log('acc:', acc);
//   console.log('el:', el);
//   return (acc += el ** 2);
// }, 0);
//
//
//
// or:
// return [].reduce.call(arguments,(acc, el) => {
//   console.log('acc:', acc);
//   console.log('el:', el);
//   return (acc += el ** 2);
// }, 0);
