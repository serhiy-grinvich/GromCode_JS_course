// function getOwnProps(obj) {
//   const propsArr = [];
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key) && typeof obj[key] !== 'function') {
//       propsArr.push(key);
//     }
//   }
//   return propsArr;
// }
// another way:
function getOwnProps(obj) {
  return Object.keys(obj).filter(el => typeof obj[el] !== 'function');
}

const obj1 = {
  a: 1,
  b: 2,
  g: 8,
  math: 9,
  name: 'horol',
  method2() {
    console.log('metod inner');
  },
};
const parentObj = {
  name: 'gosha',
  sex: 'female',
  method1() {
    console.log('metod 1');
  },
};
Object.setPrototypeOf(obj1, parentObj);
