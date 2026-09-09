/**
 * 
 * 🎯 Mini-project #1 — Even/Odd Checker

Requirement:

User se ek number lo aur:

number even hai → "Even"
number odd hai → "Odd"

Example:

Input: 8
Output: Even

Constraint: prompt() se input lena hai aur calculation ke liye number conversion karna hai.
 */

let number = Number(prompt("Enter a number: "));

if(number % 2 !== 0)
    console.log("ODD");
else 
    console.log("Even");
    
    