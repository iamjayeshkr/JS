/**
 * Project #6 — Number Guessing Game

Computer ek secret number rakhega:

let secret = 7;

User se baar-baar number guess karwao.

Rules:

Guess < secret → "Too low"
Guess > secret → "Too high"
Guess === secret → "Correct!" and game stop
Maximum 5 attempts
prompt()
Number()
while ya for
if / else
break

Example:

Guess: 3
Too low

Guess: 9
Too high

Guess: 7
Correct!

Important: Isme main solution nahi dunga. Tu khud code likh.
 */

let secret = Math.floor(Math.random() * 100 + 1); // 1 - 100
console.log(secret)

let guess= Number(prompt("Enter a number: "));;
console.log(guess);

let attempts = 5;
let attempted = 0

while(attempts !== 0){
    if(Number.isNaN(guess)){
    console.log("Not a number guess properly");
    }   
    else if(guess > secret){
            console.log("Too High");
    }else if (guess < secret){
            console.log("Too Low");
    }
    guess= Number(prompt("Enter a number: "));
    attempted++;
    attempts--;
}

if(guess === secret){
    console.log("Correct!");
}



