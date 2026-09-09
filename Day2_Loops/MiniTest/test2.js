/*
🎯 Mini-project #2 — Positive / Negative / Zero

User se number lo aur:

8  → Positive
-5 → Negative
0  → Zero

Conditions:

prompt() use karna
Number() se conversion
if / else if / else use karna

Ab poora code khud likh. 😈
*/

let number = Number(prompt("Enter a number"));

if(number > 0){
    console.log("Positive");
} else if(number < 0){
    console.log("Negative");
}else{
    console.log("Number is Zero");
}