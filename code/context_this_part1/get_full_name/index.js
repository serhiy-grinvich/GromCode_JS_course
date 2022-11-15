const user = {
  firstName: 'firstName',
  lastName: 'lastName',
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
  setFullName(fullName) {
    this.firstName = fullName.split(' ')[0];
    this.lastName = fullName.split(' ')[1];
  },
};
// user.setFullName('jack idiot');
