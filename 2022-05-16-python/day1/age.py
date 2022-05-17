# Write a program called age.py
# which will ask the user for their birth year
# and will respond with the user's age 
# in the year 2022.

print("What year were you born?")
year_str = input()
year_int = int(year_str)
age = 2022 - year_int
print("You will be " + str(age) + " this year")
print(f"You will be {age} this year")
