import sys

print("Hello!")
# note: input always returns text (a string)

# ask for the year (repeatedly if necessary)

input_valid = False
while not input_valid:
    print("What year were you born?")
    answer = input()
    try:
        birth_year = int(answer)
        input_valid = True
    except ValueError:
        print("Could not parse input as number")

age = 2022 - birth_year
print("You will be " + str(age) + " this year.")
print("You will be", age, "this year.")
