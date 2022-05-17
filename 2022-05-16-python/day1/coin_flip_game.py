import random
import time

result = random.choice(["heads", "tails"])

print("do you want to play? (y/n)")
response = input()

if response == "y":

    print("guess the result of a coin flip (heads or tails)")
    guess = input()

    time.sleep(2)

    print("the result was " + result)
    print(f"the result was {result}")

    print(f"you guessed {guess}")

    if guess == result:
        print("you were CORRECT!")
    else:
        print("you were WRONG!")
