/* eslint-disable prefer-const */
/* eslint-disable no-param-reassign */
function splitText(text, num) {
  if (typeof text !== 'string') return null;
  if (num === undefined) num = 10;
  const textArr = [];
  let startIndex = 0;
  while (startIndex <= text.length) {
    let pieceOfTxt = text.substr(startIndex, num);
    textArr.push(pieceOfTxt[0].toUpperCase() + pieceOfTxt.slice(1));
    startIndex += num;
  }

  return textArr.join('\n');
}

// 1.check if string
// 2.split to substr
// 3.capitalize 1st letter
// 3.1 push the part to array elem
// 4.join to string

// data test
// const someTxt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.!!123456789';
// splitText(someTxt, 5);
// console.log(splitText('123456789011121314151617181920212223242526'));
