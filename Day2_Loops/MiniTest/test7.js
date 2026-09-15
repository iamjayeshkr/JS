/*
Write a function called calculateAge that:

accepts birthYear
calculates the age assuming the current year is 2026
returns the age

For example:

calculateAge(2000)

should return:

26
*/
function calculateAge(birthYear){
    let currentYear = 2026;
    console.log(currentYear - birthYear)
}

calculateAge(2000)


function mystery(a, b) {
    let result = a + b;
    return result * 2;
}

let x = mystery(3, 4);
let y = mystery(x, 2);

console.log(x);
console.log(y);

/*
in x = mystery(3, 4) arguments are passed and 3 is stored in a, and 4 is stored in b respecitively then let result actually added both then 7 * 2 = 14  then y also called mystery fnc() here X = 14 and 2 a = 14, b = 2 which is result = 16 and 16 * 2 = 32 so it last we get 14, 32
*/