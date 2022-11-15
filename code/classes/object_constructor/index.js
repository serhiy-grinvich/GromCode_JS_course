class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createEmpty() {
    return new User('', null);
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(newAge) {
    if (newAge < 0) return false;
    this.age = newAge;
    if (newAge >= 25) {
      console.log(`New photo request was sent for ${this.name}`);
    }
    return newAge;
  }
}

// dataTEST
// const user1 = new User('pots', 45);
// const user2 = new User('chuvirla', -12);
// const user3 = new User('gena', 45);
// const user4 = new User('morj', 15);
// const user0 = User.createEmpty();
