/* eslint-disable max-classes-per-file */

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  // set id(value) {
  //   return this._id;
  // }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(arr) {
    this._users = arr;
    Object.freeze(this._users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map(el => el.name);
  }

  getUserIds() {
    return this._users.map(el => el.id);
  }

  getUserNameById(id) {
    return this._users.find((elem, i, arr) => elem.id === id).name;
  }
}

// examples
const user = new User('1', 'Tom', 'session-id');

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует

// datatests
// const user1 = new User('2', 'bob', '');
// const user2 = new User('3', 'vasya', '');
// const user3 = new User('4', 'tanya', '');
// const user4 = new User('5', 'inna', '');
// const user5 = new User('6', 'lusja', '');
// const user6 = new User('7', 'gena', '');

// const usersRepo = new UserRepository([user1, user2, user3, user4, user5, user6]);
