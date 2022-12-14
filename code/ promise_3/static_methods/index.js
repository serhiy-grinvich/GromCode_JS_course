// data tests
//
const getAsyncNumber = (res, delay) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(res), delay);
  });
const asyncNum1 = getAsyncNumber(57, 2000);
const asyncNum2 = getAsyncNumber(null, 3000);
const asyncNum3 = getAsyncNumber('10', 1000);
const asyncNum4 = getAsyncNumber(4, 4000);
const asyncNum6 = Promise.reject();

//
const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers)
    .then(resultArr =>
      resultArr.filter(elem => !isNaN(elem)).reduce((acc, value) => acc + Number(value), 0),
    )
    .catch(() => Promise.reject(new Error("Can't calculate")));
};

// algo
// get values array from resolved promises
// sum it

asyncSum(asyncNum1, asyncNum2, asyncNum3, asyncNum4);
