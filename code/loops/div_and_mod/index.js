let sum = 0;
for (let num = 1; num <= 1000; num++) {
    sum += num;
}
let div = Math.floor(sum / 1234);
let mod = sum % 1234;
console.log( div > mod);