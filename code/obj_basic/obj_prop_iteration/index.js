/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

const concatProps = obj => {
  const resultArr = [];
  for (let key in obj) {
    resultArr.push(obj[key]);
  }
  return resultArr;
};

// another way:
// const concatProps = obj => {
//   let resultArr = [];
//   for (let key in obj) {
//     resultArr = resultArr.concat(obj[key]);
//   }
//   return resultArr;
// };
//
//
// examples
concatProps({ name: 'John Doe', age: 17, interest: 'football' }); // ==> ['John Doe', 17, 'football']
