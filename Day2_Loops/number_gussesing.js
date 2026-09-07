let secret = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guess;

do {
    guess = Number(prompt("Guess a number between 1 and 100:"));
    attempts++;
    if (guess > secret) console.log("Too high!");
    else if (guess < secret) console.log("Too low!");
} while (guess !== secret);

console.log(`You got it in ${attempts} attempts!`);
