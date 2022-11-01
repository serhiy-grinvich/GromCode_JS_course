function splitString(str, num) {
  if (typeof str !== 'string') return null;
  // eslint-disable-next-line no-param-reassign
  if (num === undefined) num = 10;
  const resultArr = [];
  let positionIndex = 0;
  while (positionIndex < str.length) {
    let subStr = str.substr(positionIndex, num);
    positionIndex += num;
    if (subStr.length < num) {
      while (subStr.length < num) {
        subStr += '.';
      }
    }
    resultArr.push(subStr);
  }
  return resultArr;
}

// algo
// 1.check requirements
// 2.create array
// 3.split string and push it to array
// --3.1 create index var
// --3.2 create loop for pushing
// 4.increase amount of letters if <num

// data test
const text = '12345678910';
console.log(splitString(text, 5));

// work
//
// for (let i = num - subStr.length; i > 0; i -= 1) {
//   subStr += '.';
// }
// work

// for (let i = 0; num - subStr.length > 0; i += 1) {
//   subStr += '.';
// }
