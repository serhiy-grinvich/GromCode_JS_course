function isPrime(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count += 1;
    }
  }
  return count === 2;
}
function getPrimes(num) {
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}
