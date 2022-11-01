function cloneArr(arr) {
  if (!Array.isArray(arr)) return null;
  return [...arr];
}

// const someArr = [1, 6, 5, 8];
// const tryArr = [...someArr];
// another way:
//
//

// function cloneArr(arr) {
//   if (!Array.isArray(arr)) return null;
//   return arr.slice();
// }
