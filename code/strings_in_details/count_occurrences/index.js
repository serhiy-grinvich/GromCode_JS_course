/* eslint-disable no-param-reassign */
const countOccurrences = (text, str) => {
  if (str === '') return null;
  if (text === undefined) {
    text = '';
  }
  let counter = 0;
  let restOfText = text;
  while (restOfText.indexOf(str) !== -1) {
    counter += 1;
    restOfText = restOfText.slice(0, restOfText.lastIndexOf(str));
    console.log(restOfText);
  }
  return counter;
};
// 1.check requirement
// 2.get var with rest of string
// 3.find and count entries
// 4. slice rest of string
// 5.return amount of entries

// test data
// const someText = 'someTextAndSomeandTextomesome';
// countOccurrences(someText);
// countOccurrences(someText, 'Text'); // => 2
// countOccurrences(someText, 'ome'); // ==> 4
// countOccurrences(someText, 'And'); // ==> 1
