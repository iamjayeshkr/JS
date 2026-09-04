let s1 = 'Single quotes';
let s2 = "Double quotes";
let s3 = `Backticks (template literals)`;


let name = "Aman";
let age = 25;

console.log(`Hello, my name is ${name} and I am ${age} years old.`);
// "Hello, my name is Aman and I am 25 years old."

// Multi-line strings work naturally too:
let poem = `Roses are red,
Violets are blue,
JS is awesome,
And so are you.`;


let s = "RUDRA SHARMA";

console.log(s.length);              // 13
console.log(s.toUpperCase());       // "HELLO, WORLD!"
console.log(s.toLowerCase());       // "hello, world!"
console.log(s.indexOf("World"));    // 7  (position of "World")
console.log(s.includes("Hello"));   // true
console.log(s.slice(0, 5));         // "Hello"
console.log(s.substring(6, 12));    // "World"
console.log(s.replace("World", "JS"));   // "Hello, JS!"
console.log(s.split(" "));       // ["Hello", "World!"]
console.log("   hi   ".trim());     // "hi"
console.log("abc".repeat(3));       // "abcabcabc"
console.log(s.startsWith("R")); // true
console.log(s.endsWith("A"));       // true
console.log(s.charAt(0));           // "H"
console.log(s[6]);                  // "H" (also works)


