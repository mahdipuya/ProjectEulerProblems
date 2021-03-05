// Each new term in Fibonacci squence is generated by adding the previous tow terms.
// By considering the terms in the Fibonacci sequence whose values do not exeed four milion, find the num of the even-valued terms.

function isEven(n) {
    if (n % 2 == 0) {
        return true
    }
    else {
        return false
    }
}

let first = 1
let secend = 2
let sum = 0

while (first < 4000000) {
    if (isEven(first)) {
        sum += first
    }
    let next = first + secend
    first = secend
    secend = next
}

console.log(sum);