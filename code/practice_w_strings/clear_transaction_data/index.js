function cleanTransactionsList(arr) {
  return arr
    .filter(el => !isNaN(el))
    .map(el => {
      return '$' + Number(el).toFixed(2);
    });
}
// algo
// 1. filter arr from letters
// 2. turn str to number in array
// 3. + $ and return
// const arrayTrans = ['   1.9 ', '16.4', '17', '1 dollar'];
