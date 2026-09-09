/**
 * 🎯 Mini-project #3 — Largest of Two Numbers

User se 2 numbers lo aur batao kaunsa bada hai.

Input:
25
40

Output:
40 is larger
Requirements
prompt() × 2
Number() conversion
if / else if / else
Agar dono equal hain → "Both are equal"
 */

let num1 = Number(prompt("Enter num1 "));
let num2 = Number(prompt("Enter num2 "));

if(num1 === num2){
    console.log("Both are equal");
}else if(num1 > num2){
    console.log(`${num1} is larger`);
}
else{
    console.log(`${num2} is larger`);
}
