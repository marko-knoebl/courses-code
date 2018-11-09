import isprime

print(isprime.isprime(7))
print(isprime.isprime(8))
print(isprime.isprime(91))
print(isprime.isprime(97))

z = int(input("enter any integer: "))

res = isprime.isprime(z)

if res == True:
    print(str(z) + " is prime")
else:
    print(str(z) + " is not prime")

print(res)
