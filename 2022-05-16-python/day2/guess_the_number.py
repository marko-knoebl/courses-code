import random

# while loop for playing repeatedly
while True:
    secret_number = random.randint(1, 10)

    # first guess
    print("guess the number:")
    user_guess_str = input()
    user_guess = int(user_guess_str)

    number_of_guesses = 1
    # more guesses if the result is still incorrect
    while user_guess != secret_number and number_of_guesses < 5:
        print("incorrect!")
        if user_guess > secret_number:
            print("too high!")
        else:
            print("too low!")
        print("guess the number:")
        user_guess_str = input()
        user_guess = int(user_guess_str)
        number_of_guesses = number_of_guesses + 1

    if user_guess == secret_number:
        print("correct!")
        print(f"You made {number_of_guesses} guesses")
    else:
        print("You ran out of guesses")
    
    print("another game? (y/n)")
    answer = input()
    if answer == "n":
        break
