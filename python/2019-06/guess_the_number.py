# beispielhafter programmlauf:

# take a guess:
# 50
# too high!
# take a guess:
# 30
# too low!
# take a guess:
# 41
# Correct!

import random

number = random.randint(1, 100)

while True:
    guess = int(input("Take a guess:\n"))
    if guess == number:
        print("Correct!")
        break
    elif guess < number:
        print("Too low!")
    else:
        print("Too high!")
