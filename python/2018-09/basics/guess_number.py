from itertools import count

number = 42

proceed = True

for i in count(1):
    guess = int(input('take a guess:'))
    if guess == number:
        break
    elif guess < number:
        print('too low!')
    else:
        print('too high!')

print('Correct!')
print('Number of guesses:', i)
