let n = 3.14159;

console.log(n.toFixed(2));     // "3.14" (returns string!)
console.log(Number("42"));     // 42
console.log(Number("42abc"));  // NaN
console.log(parseInt("57px")); // 42 (parses what it can)
console.log(parseFloat("3.14kg")); // 3.14
console.log(isNaN("hello"));   // true
console.log(Number.isInteger(5));   // true
console.log(Number.isInteger(5.5)); // false
console.log(Number.isInteger(5.5)); // false

console.log(Math.PI);            // 3.14159...
console.log(Math.E);             // 2.71828...

console.log(Math.round(4.6));    // 5
console.log(Math.floor(4.9));    // 4 (always rounds down)
console.log(Math.ceil(4.1));     // 5 (always rounds up)
console.log(Math.abs(-7));       // 7
console.log(Math.max(1, 5, 3));  // 5
console.log(Math.min(1, 5, 3));  // 1
console.log(Math.pow(2, 10));    // 1024
console.log(Math.sqrt(16));      // 4
console.log(Math.random());      // random number between 0 and 1


max = 10
min = 1
let rand = Math.floor(Math.random() * 10) + min;
console.log(rand);
