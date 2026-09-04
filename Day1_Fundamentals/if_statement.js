let a = true, b = false;

console.log(a && b);   // false   AND: both must be true
console.log(a || b);   // true    OR: at least one must be true
console.log(!a);       // false   NOT: flips the value


console.log("hello" && "world");  // "world"
console.log(0 && "hello");        // 0
console.log("hello" || "");     // "default"
console.log("user" || "guest");   // "user"


// condition ? valueIfTrue : valueIfFalse

num = 20
result = num % 2 == 0 ? "Even" : "ODD"
console.log(result);
