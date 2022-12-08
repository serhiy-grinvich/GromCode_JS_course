function delay(delay, callback, context, ...args) {
  setTimeout(() => callback.apply(context, args), delay);
}

//
// algo
//

//data tests
// const someObj = {
//   name: 'Johny',
//   sayPhrase(greeting, phrase) {
//     console.log(`${greeting}, ${this.name}... you're a little ${phrase}`);
//   },
// };
// const someObj1 = {
//   name: 'gnida',
// };
// delay(3000, someObj.sayPhrase, someObj, 'Hi', 'PIZDYK');
