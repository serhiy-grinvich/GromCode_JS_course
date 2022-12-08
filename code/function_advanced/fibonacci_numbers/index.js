const maxFibonacci = num => {
  let a = 0;
  let b = 1;
  let fib;
  function isFibo(a, b) {
    fib = a + b;
    if (fib === num) return fib;
    if (fib > num) return b;
    a = b;
    b = fib;
    return isFibo(a, b);
  }
  return isFibo(a, b);
};

//
// export function maxFibonacci(num, firstNum = 0, secondNum = 1) {
//   if (secondNum > num) {
//     return firstNum;
//   }
//   if (secondNum === num) {
//     return secondNum;
//   }

//   return maxFibonacci(num, secondNum, firstNum + secondNum);
// }
