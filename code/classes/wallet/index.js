class Wallet {
  constructor() {
    this._balance = 0;
  }
  // get _balance() {
  //   return this._balance;
  // }

  getBalance() {
    return this._balance;
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log('No enough funds');
      return;
    }
    this._balance -= amount;
  }
}
const wallet1 = new Wallet(100);
