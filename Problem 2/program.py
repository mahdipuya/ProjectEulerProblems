# Each new term in Fibonacci squence is generated by adding the previous tow terms.
# By considering the terms in the Fibonacci sequence whose values do not exeed four milion, find the num of the even-valued terms.

def isEven(n):
    if n % 2 == 0:
        return True
    else:
        return False
    
first = 1
secend = 2
sum = 0

while (first < 4000000):
    if isEven(first):
        sum += first
    new = first + secend
    first = secend
    secend = new

print (sum)