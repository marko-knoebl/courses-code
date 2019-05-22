from isprime import isprime

from lottery import lottery

print(isprime(91))
print(isprime(97))

lottery_numbers = lottery()

for number in lottery_numbers:
    print(number)
    print(isprime(number))
