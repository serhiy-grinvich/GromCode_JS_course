function removeDuplicates(array) {
  if (!Array.isArray(array)) return null;
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArr.includes(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
