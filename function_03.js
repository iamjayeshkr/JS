// Single expression → implicit return (no braces, no return keyword)
const add = (a, b) => a + b;

console.log(add(5,8))

// Single parameter → parentheses optional
const square = x => x * x;

// No parameters → empty parentheses required
const greet = () => console.log("Hello");

// Multi-line body → braces and explicit return required
// add = (a, b) => {
//     const sum = a + b;
//     return sum;
// };


