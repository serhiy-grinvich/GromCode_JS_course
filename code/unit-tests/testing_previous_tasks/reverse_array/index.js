export function reverseArray(arr) {
  if (!Array.isArray(arr)) return null;
  return arr.slice().reverse();
}

// solution with .reduce() :
//
//
// function reverseArray(arr) {
//   if (!Array.isArray(arr)) return null;
//   return arr.slice().sort((a, b) => -1);
// }

// examples
const someArr = [12, 13, 14, 15, 19];
reverseArray([1, 17, 10, 19, 8, 5, 32]); // ===> [32, 5, 8, 19, 10, 17, 1]
reverseArray([0, 6, 1, 3, 8, 4]); // ===> [4, 8, 3, 1, 6, 0]
reverseArray(['test', 7, 9, 1]); // ===> [1, 9, 7, 'test']
reverseArray(someArr);
