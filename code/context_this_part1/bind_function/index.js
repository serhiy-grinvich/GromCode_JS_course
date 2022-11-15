// 'use strict';
function bind(func, context, ...initArg) {
  return function (...callArg) {
    return func.apply(context, callArg.concat(initArg));
  };
}

function sayHi(text) {
  console.log(`${text}, ${this.name} ${this.surname}!`);
  return 1;
}

function getSum() {
  console.log(this.a + this.b);
  return this.a + this.b;
}
const obj1 = {
  a: 15,
  b: 4,
};
const obj2 = {
  name: 'Loui',
  surname: 'Andersen',
};
const hiLoui = bind(sayHi, obj2, 'fuck you');
const sumObj = bind(getSum, obj1);
