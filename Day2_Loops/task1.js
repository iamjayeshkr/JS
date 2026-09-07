// ask user a num and print its table

let num = Number(prompt("Enter a number: "))

for(let i = 1; i <= 10; i++){
    console.log(`${num} X ${i} = ${num * i}`);
}