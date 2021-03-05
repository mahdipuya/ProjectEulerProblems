// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

// This problem is wrong. Pleas correct it if you can

function isPalindrome(num) {
    reverseNumber = String(num).split('').reverse().join('')
    if (String(num) == reverseNumber) {
        return true
    }
    else {
        return false
    }
}

let palindrome = []

for (let i = 900; i <= 999; i++) {
    for (let n = 900; n <= 999; i++) {
        if (isPalindrome(i * n)) {
            palindrome.push(i * n)
        }
    }
}

console.log(Math.max(palindrome));