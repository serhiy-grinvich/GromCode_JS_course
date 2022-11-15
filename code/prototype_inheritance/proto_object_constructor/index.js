function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};
User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};
User.prototype.setAge = function (age) {
  if (age < 0) return false;
  this.age = age;
  if (age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }
  return this.age;
};
const user1 = new User('Varlamov', 43);
const user2 = new User('Katz', 36);

// function UserAnother(name, age) {
//   this.name = name;
//   this.age = age;
//   function sayHi() {
//     console.log(`Hi, I am ${this.name}`);
//   }
// }
// const anotherUser1 = new UserAnother('kolya', 23);
// const user3 = {
//   name: 'vasya',
//   //   __proto__: User, <--- dont work
// };
// Object.prototype.sayHi = function () {
//   console.log(`this is another console.log: Hi, I am ${this.name}`);
// };
