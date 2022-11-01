'use strict';

/**
 * @param {object} firstObj
 * @param {object} secondObj
 * @return {boolean}
 */
function compareObjects(firstObj, secondObj) {
  const firstArr = Object.keys(firstObj);
  const secondArr = Object.keys(secondObj);
  if (firstArr.length !== secondArr.length) {
    return false;
  }
  return firstArr.every(key => {
    return firstObj[key] === secondObj[key];
  });
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

const obj5 = {
  age: 17,
  name: 'Tom',
};

//obj to arr
//compare length
//compare each elem for including

compareObjects(obj1, obj2); // ==> false
compareObjects(obj2, obj3); // ==> false
compareObjects(obj1, obj4); // ==> true
compareObjects(obj4, obj5); // ==> true

// //

//work correct test 92%
//
//
// function compareObjects(firstObj, secondObj) {
//   return !(
//     Object.keys(firstObj).some(key => {
//       return firstObj[key] !== secondObj[key];
//     }) || Object.values(firstObj).length !== Object.values(secondObj).length
//   );
// }
//
//
//work correct but dont pass  tests
//
// function compareObjects(firstObj, secondObj) {
//   return (
//     Object.entries(firstObj)
//       .map(prop => prop.join(''))
//       .every(elem =>
//         Object.entries(secondObj)
//           .map(prop => prop.join(''))
//           .includes(elem),
//       ) && Object.entries(firstObj).length === Object.entries(secondObj).length
//   );
// }

//work/dont passed tests/ work incorrect

//
//
// function compareObjects(firstObj, secondObj) {
//   return !(
//     Object.values(firstObj).some(el => {
//       return Object.values(secondObj).indexOf(el) === -1;
//     }) || Object.values(firstObj).length !== Object.values(secondObj).length
//   );
// }

//dont work correct
// function compareObjects(firstObj, secondObj) {
//   return (
//     Object.keys(firstObj).every(elem => {
//       return Object.keys(secondObj).includes(elem);
//     }) &&
//     Object.values(firstObj).every(elem => {
//       return Object.values(secondObj).includes(elem);
//     }) &&
//     Object.entries(firstObj).length === Object.entries(secondObj).length
//   );
// }
