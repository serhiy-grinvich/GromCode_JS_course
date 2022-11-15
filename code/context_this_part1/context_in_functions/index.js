const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
};
let func = user.getFullName;

const user2 = {
  firstName: 'Bella',
  lastName: 'Ciao',
};
