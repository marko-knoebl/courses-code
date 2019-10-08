print("Hello.")
print("When were you born?")
# input always returns a string
year_str = input()
year_int = int(year_str)

age = 2019 - year_int

print(f"You are {age} years old.")

age_seconds = age * 365 * 24 * 60 * 60

if age_seconds > 1000000000:
    print("You are older than 1 billion seconds.")
    print("You are not that young anymore.")
else:
    print("You are rather young.")
print("the end")
