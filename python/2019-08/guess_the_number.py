# Erstelle eine Zufallszahl von 1 - 10.
# Der Benutzer soll sie erraten.

import random

# Erstellen einer Zufallszahl
number = random.randint(1, 100)


guess_correct = False

while not guess_correct:
    guess = int(input("Take a guess: "))
    if guess == number:
        print("Correct!")
        print("Congratulations!")
        guess_correct = True
    elif guess < number:
        print("too small!")
    else:
        print("too big!")

# Alternative:
# while True:
#     guess = int(input("Take a guess: "))
#     if guess == number:
#         print("Correct!")
#         print("Congratulations!")
#         break
#     elif guess < number:
#         print("too small!")
#     else:
#         print("too big!")

print("The end")
