# The prime factors of 13195 are 5, 7, 13 and 29.
# What is the largest prime factor of the number 600851475143 ?

array = []

def isPrime(num):
    prime = True
    for i in range(2, num):
        if num % i == 0:
            prime = False
    if prime:
        array.append(num)


for i in range(2, 10001):
    isPrime(i)

for i in array:
    if 600851475143 % i == 0:
        print(i)
