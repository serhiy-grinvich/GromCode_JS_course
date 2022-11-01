'use strict';

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */
function buildObject(keysList, valuesList) {
  return Object.fromEntries(
    keysList.map((elem, i) => {
      return [elem].concat(valuesList[i]);
    }),
  );
}
// examples
const keys = ['name', 'address', 'age', 'prof'];
const values = ['Bob', 'Ukraine', 34, 'bomjara'];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }

//

//with for loop:
// function buildObject(keysList, valuesList) {
//   const resultObj = {};
//   for (let i = 0; i < keysList.length; i++) {
//     resultObj[keysList[i]] = valuesList[i];
//   }
//   return resultObj;
// }
//
//
//
//with reduce() & Object.assign() :
// function buildObject(keysList, valuesList) {
//   return keysList.reduce((acc, current, i) => {
//     return Object.assign(acc, { [current]: valuesList[i] });
//   }, {});
// }

//
//
//with reduce and spread
//
// function buildObject(keysList, valuesList) {
//   return keysList.reduce((acc, current, i) => {
//     return { ...acc, [current]: valuesList[i] };
//   }, {});
// }

//
//
//
//with map( ) & Object.fromEntries()
//
// function buildObject(keysList, valuesList) {
//   return Object.fromEntries(
//     keysList.map((elem, i) => {
//       return [elem].concat(valuesList[i]);
//     }),
//   );
// }
