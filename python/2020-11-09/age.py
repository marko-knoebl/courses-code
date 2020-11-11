print("When were you born?")
birth_year_str = input()
birth_year_int = int(birth_year_str)
age = 2020 - birth_year_int
print(f"You are {age} years old.")

# age must be converted to a string before using the "+" operation
print("You are " + str(age) + " years old.")
print("You are", age, "years old.")

# new

age_seconds = age * 365 * 24 * 60 * 60

if age_seconds < 100000000:
    print("You are les than 100 million seconds old")
    print("You are very young")
elif age_seconds < 1000000000:
    print("You are less than 1 billion seconds old")
elif age_seconds < 2000000000:
    print("You are less than 2 billion seconds old")
else:
    print("You are older than 2 billion seconds")
