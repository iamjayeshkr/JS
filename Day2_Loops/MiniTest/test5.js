/**
🎯 Project #5 — Simple Calculator

User se:

first number
operator (+, -, *, /)
second number

lo aur result print karo.

Example:

Input:
10
*
5

Output:
50
Requirements
prompt()
Number()
switch
break
+, -, *, /
Division by 0 ko handle karna hai.

Example:

10 / 0
→ Cannot divide by zero

Poora code khud likh.
Is baar switch tera main weapon hai. 😈
 */

let num1 = Number(prompt("Enter a num1: "));
let operator = prompt("Enter the operator [+ , -, * , / , % ] ")
let num2 = Number(prompt("Enter a num2"))

let result = null;

if(operator === '/' && num2 === 0){
    console.error("Cannot divide by zero");
}
else{
    switch(operator){
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    case "%":
        result = num1 % num2;
        break;
    default:
        console.error("Wrong Input");
    }

    console.log(result);
}

