print("Hello!")
print("What year were you born?")
# note: input always returns text (a string)
answer = input()
birth_year = int(answer)
age = 2022 - birth_year
print("You will be " + str(age) + " this year.")
print("You will be", age, "this year.")
