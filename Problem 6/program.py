sumOfSquares = squareOfSum = 0

for i in range(1, 101):
    sumOfSquares += i * i
    squareOfSum += i

squareOfSum *= squareOfSum

total = squareOfSum - sumOfSquares

print(total)