// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

let factors = []

function isPrime(num) {
    prime = true;
    for (let i = 2; i <= num; i++) {
        if (num % i == 0) {
            prime = false
        }
    }
    if (prime = true) {
        factors.push(num)
    }
}

for (let i = 2; i <= 10000; i++) {
    isPrime(i)
}

for (let i in factors) {
    if (600851475143 % i == 0) {
        console.log(i);
    }
}