const user = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  },
};
