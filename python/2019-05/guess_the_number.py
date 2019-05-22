import random

secret_number = random.randint(1, 100)

guess_correct = False

while guess_correct != True:
    guess = int(input("take a guess:"))
    if guess == secret_number:
        print("you are correct")
        print("Congratulations!")
        guess_correct = True
    elif guess < secret_number:
        print('too low!')
    else:
        print('too high!')
