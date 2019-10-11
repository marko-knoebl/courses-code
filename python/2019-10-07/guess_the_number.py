# Beispielhafter Programmlauf:

# GUESS THE NUMBER!
# Enter a number (1 - 100):
# 50
# too low!
# Enter a number (1 - 100):
# 70
# too high!
# Enter a number (1 - 100):
# 60
# too low!
# Enter a number (1 - 100):
# 65
# too low!
# Enter a number (1 - 100):
# 67
# CORRECT!

import random

print("GUESS THE NUMBER!")
secret_number = random.randint(1, 100)

while True:
    print("Enter a number (1 - 100):")
    guessed_number_str = input()

    try:
        guessed_number = int(guessed_number_str)
    except ValueError:
        print("Invalid input")
        continue

    if guessed_number == secret_number:
        print("Correct!")
        break
    elif guessed_number < secret_number:
        print("Wrong! Too low!")
    else:
        print("Wrong! Too high!")
