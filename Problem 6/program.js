let sumOfSquares = 0;
let squareOfSum = 0;

for (let i = 1; i <= 100; i++) {
    sumOfSquares += i * i;
    squareOfSum += i;
}

squareOfSum *= squareOfSum;

let total = squareOfSum - sumOfSquares;

console.log(total);