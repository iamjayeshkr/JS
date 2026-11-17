let matrix = [
    [5,  2,  3],
    [4,  10, 6],
    [7,  8,  15]
];

console.log(matrix.length-1);


let sum = 0;

for(let i = 0; i <= matrix.length -1; i++){
    for(let j = 0; j <= i; j++){
        if(j === i)
            sum += matrix[i][j]
    }
}

console.log(sum);
