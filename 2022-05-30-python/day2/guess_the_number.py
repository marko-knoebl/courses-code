# run of one game:

# guess the number (1-10):
# 4
# too low! try again!
# 6
# too high! try again!
# 5
# correct!
# you took 3 tries!

import random

number = random.randrange(1, 11)

print("guess the number (1-10):")

guess = None

num_tries = 0

while guess != number:
    guess = int(input())
    num_tries = num_tries + 1
    if guess == number:
        print("Correct!")
        print(f"You took {num_tries} tries.")
    elif guess > number:
        print("Too high!")
    else:
        print("Too low!")
