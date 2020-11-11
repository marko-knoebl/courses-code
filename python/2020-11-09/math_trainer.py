import random

# tasks:
# - avoid negative solutions
# - collect statistics

given_answers = 0
right_answers = 0

should_continue = True
while should_continue:
    a = random.randint(0, 50)
    b = random.randint(0, 50)

    # make a random choice concerning the operation
    if random.random() > 0.5:
        operation = "+"
        solution = a + b
    else:
        operation = "-"
        solution = a - b

    print(f"What is {a} {operation} {b}?")
    answer = int(input())

    given_answers = given_answers + 1
    if answer == solution:
        print("correct!")
        right_answers = right_answers + 1
    else:
        print("wrong!")
    
    print("enter x to exit")
    reply = input()
    if reply == "x":
        should_continue = False

print(f"Total: {given_answers}")
print(f"Correct: {right_answers}")