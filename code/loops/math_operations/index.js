const start = 5;
const end = 23;

let result = 0;

for (let num = start; num <= end; num++) {
    if (num % 5 === 0) {
        console.log(num);
    } else if (num % 2 === 0 && num % 4 !== 0) {
        result += num;
    } else if (num % 3 === 0) {
        result -= num;
    } else if (num % 4 === 0) {
        result *= num;
    } else continue;
}
