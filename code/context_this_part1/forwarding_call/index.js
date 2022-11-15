function defer(func, ms) {
  return function () {
    setTimeout(func.apply(this, arguments), ms);
  };
}
const user = {
  name: 'Loshara',
  age: 10,
  sayHi() {
    console.log(`HI, i\'m ${this.name}! and I\'m ${this.age}`);
  },
};
const deferredHi = defer(user.sayHi, 1500);
deferredHi.call(user);
const user2 = {
  name: 'Dibil',
  age: 15,
};
deferredHi.call(user2);
