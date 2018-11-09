import random

number = random.randint(1, 100)

guess_correct = False

while guess_correct == False:
    guess = int(input('Enter a guess:'))
    if guess < number:
        print('Too low')
    elif guess == number:
        guess_correct = True
        print('Correct')
    else:
        print('Too high')

