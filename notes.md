# 🐼Phase 2

---

## Part A — Functions

A **function** is a reusable block of code that performs a specific task. Instead of writing the same logic over and over, you write it once inside a function and call it whenever needed.

Think of a function as a **machine**: you give it input → it does something → it gives you output.

### 1. Why Do We Need Functions?

Without functions:

```jsx
let length1 = 5, breadth1 = 3;
let area1 = length1 * breadth1;
console.log(area1);

let length2 = 10, breadth2 = 4;
let area2 = length2 * breadth2;
console.log(area2);

let length3 = 7, breadth3 = 2;
let area3 = length3 * breadth3;
console.log(area3);
```

With a function:

```jsx
function calculateArea(length, breadth) {
    return length * breadth;
}

console.log(calculateArea(5, 3));   // 15
console.log(calculateArea(10, 4));  // 40
console.log(calculateArea(7, 2));   // 14
```

**Three big benefits:**

1. **Reusability** — write once, use many times.
2. **Readability** — `calculateArea(5, 3)` tells you what's happening; `5 * 3` doesn't.
3. **Maintainability** — fix a bug in one place, not ten.
4. Accessibility

---

### 2. Function Declaration

The classic syntax:

```jsx
function greet(name) {
    console.log("Hello, " + name);
}

greet("Aman");    // Hello, Aman
greet("Priya");   // Hello, Priya
```

**Anatomy:**

- `function` — the keyword
- `greet` — the function name
- `(name)` — parameter list (inputs)
- `{ ... }` — function body (the code)

**Parameters vs Arguments:**

- **Parameter** = the placeholder in the definition (`name`)
- **Argument** = the actual value passed when calling (`"Aman"`)

Most people use the words interchangeably — that's fine — but technically they're different.

---

### 3. Function Expression

A function can also be stored in a variable.

```jsx
const greet = function(name) {
    console.log("Hello, " + name);
};

greet("Aman");
```

**Notice the semicolon at the end** — because it's an assignment statement.

**Key difference from declarations:**

- Function declarations are **hoisted** (you can call them before they're written — we'll explore this in Phase 3).
- Function expressions are **not** hoisted in the same way.

For now, just know both exist and both work.

---

### 4. Anonymous Functions

A function without a name is called **anonymous**. The function expression above is anonymous — it has no name; it's just stored in a variable.

```jsx
const sayHi = function() {
    console.log("Hi!");
};
```

Anonymous functions are very commonly used as **callbacks** (we'll see this soon).

---

### 5. Arrow Functions (Modern, Preferred)

ES6 introduced a shorter syntax called **arrow functions**.

```jsx
// Regular function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function — same thing
const add = (a, b) => {
    return a + b;
};
```

**Shorthand rules:**

```jsx
// Single expression → implicit return (no braces, no return keyword)
const add = (a, b) => a + b;

// Single parameter → parentheses optional
const square = x => x * x;

// No parameters → empty parentheses required
const greet = () => console.log("Hello");

// Multi-line body → braces and explicit return required
const add = (a, b) => {
    const sum = a + b;
    return sum;
};
```

**When to use arrow vs regular functions?**

- For short, single-purpose helpers → arrow functions.
- For methods inside objects, or anywhere you need `this` → regular functions (we'll cover `this` in Phase 4).
- For top-level "main" functions in a file → either works; team style decides.

---

### 6. Parameters: Defaults, Rest, and Edge Cases

### Default Parameters

If no argument is passed, use a default value:

```jsx
function greet(name = "Guest") {
    console.log("Hello, " + name);
}

greet("Aman");    // Hello, Aman
greet();          // Hello, Guest
```

### Rest Parameters

Sometimes you don't know how many arguments will be passed. Use `...` to collect them all into an array:

```jsx
function sum(...numbers) {
    let total = 0;
    for (let n of numbers) {
        total += n;
    }
    return total;
}

console.log(sum(1, 2, 3));           // 6
console.log(sum(1, 2, 3, 4, 5, 6));  // 21
```

`numbers` is a real array here — you can use any array method on it.

### What If You Pass Too Many or Too Few?

JavaScript doesn't complain. Missing parameters become `undefined`; extra arguments are simply ignored.

```jsx
function add(a, b) {
    return a + b;
}

console.log(add(5));        // NaN  (5 + undefined)
console.log(add(5, 10, 20)); // 15  (the 20 is ignored)
```

This is *very* different from languages like Java or Python. Use defaults or rest parameters to handle it gracefully.

---

### 7. Return Values

A function can **return** a value back to whoever called it.

```jsx
function multiply(a, b) {
    return a * b;
}

let result = multiply(4, 5);
console.log(result);   // 20
```

**Rules about `return`:**

- A function can have **multiple return statements** — but only one will actually execute (the first one reached).
- `return` immediately exits the function — code after it doesn't run.
- A function without `return` returns `undefined` by default.

```jsx
function checkAge(age) {
    if (age < 0) return "Invalid age";    // early return
    if (age >= 18) return "Adult";
    return "Minor";
}

console.log(checkAge(-5));   // "Invalid age"
console.log(checkAge(20));   // "Adult"
console.log(checkAge(10));   // "Minor"
```

---

### 8. Functions as First-Class Citizens

In JavaScript, functions are **values**, just like numbers or strings. This means you can:

1. Store functions in variables.
2. Pass functions as arguments to other functions.
3. Return functions from other functions.

```jsx
// 1. Store in a variable
const sayHi = function() { console.log("Hi"); };

// 2. Pass as argument
function callTwice(fn) {
    fn();
    fn();
}
callTwice(sayHi);   // Hi  Hi

// 3. Return from a function
function makeGreeter(greeting) {
    return function(name) {
        console.log(greeting + ", " + name);
    };
}
const helloGreeter = makeGreeter("Hello");
helloGreeter("Aman");   // Hello, Aman
```

This is one of JavaScript's most powerful features. We'll use it constantly.

---

### 9. Callback Functions

A **callback** is a function that is passed as an argument to another function, to be called later.

```jsx
function processUser(name, callback) {
    console.log("Processing user: " + name);
    callback(name);
}

function welcome(name) {
    console.log("Welcome, " + name);
}

processUser("Aman", welcome);
// Processing user: Aman
// Welcome, Aman
```

**Real-world example you've already seen:** `setTimeout`.

```jsx
setTimeout(function() {
    console.log("3 seconds passed");
}, 3000);
```

Here, the anonymous function is a **callback** that `setTimeout` calls after 3000ms.

> **Why callbacks matter:** They are everywhere in JavaScript — array methods, event handlers, async operations. Get comfortable with them now.
> 

