import random

result = random.choice(["heads", "tails"])

print("Welcome to the coin flip game!")
print("Guess the result! (heads or tails)")
guess = input()

if guess != "heads" and guess != "tails":
    print("You should enter 'heads' or 'tails'")

if not (guess == "heads" or guess == "tails"):
    print("You should enter 'heads' or 'tails'")

print("The actual result was:")
print(result)

if guess == result:
    print("You were right :)")
else:
    print("You were wrong :(")
