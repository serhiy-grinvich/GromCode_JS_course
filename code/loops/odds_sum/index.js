const start = 0;
const end = 1000;
let sum = 0;
for (let num = start; num <= end; num++) {
    if (num % 2 === 0) continue;
    console.log("Found");
    sum += num;
    
}
console.log( (sum*5) > 5000 ? "Bigger" : "Smaller or equal");
