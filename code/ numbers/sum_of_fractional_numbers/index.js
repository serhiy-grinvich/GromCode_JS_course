function getTotalPrice(arr) {
  const price = Math.floor(arr.reduce((sum, current) => sum + current) * 100) / 100;
  return '$' + price;
}

// const array = [13.53, 6.439]; // ==> 19.96(9);
// getTotalPrice(array);
