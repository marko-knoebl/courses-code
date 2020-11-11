# guess the number (1-100)!
# 34
# too low!
# guess the number (1-100)!
# 67
# too low!
# guess the number (1-100)!
# 81
# correct!

import random
secret_number = random.randint(1, 100)

print("guess the number")
user_guess = int(input())

while user_guess != secret_number:
    # user guessed wrong
    # tell them if it was too high or too low
    # and let them guess again
    if user_guess > secret_number:
        print("too high. try again")
    else:
        print("too low. try again")
    user_guess = int(input())

# while block was exited - the user guessed correctly
print("correct!")
