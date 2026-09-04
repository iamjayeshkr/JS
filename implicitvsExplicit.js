let str = "42";
let num = Number(str);     // converts "42" to 42
console.log(typeof num);   // "number"

let n = 100;
let s = String(n);         // converts 100 to "100"
console.log(typeof s);  

let val = "hello";
let b = Boolean(val);      // true (non-empty string is truthy)
console.log( b);  

console.log("5" + 3 + 5);     // "53"   ← string concatenation
console.log(3 + "5"); 
console.log("5" - 3);     // 2      ← number subtraction
console.log("5" * "2");   // 10
console.log(true + 1);    // 2      (true becomes 1)
console.log(false + 1);   // 1      (false becomes 0)
console.log(null + 1);    // 1      (null becomes 0)
console.log(undefined + 1); // NaN  (undefined becomes NaN)
