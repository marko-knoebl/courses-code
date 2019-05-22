birth_year_string = input("when were you born?")
birth_year_int = int(birth_year_string)

age = 2019 - birth_year_int

print("You are " + str(age) + " years old")

age_seconds = age * 365 * 24 * 60 * 60

if age_seconds < 1000000000:
    print("You are less than 1 billion seconds old")
elif age_seconds < 2000000000:
    print("You are between 1 and 2 billion seconds old")
elif age_seconds < 2500000000:
    print("You are between 2 and 2.5 billion seconds old")
else:
    print("You are older than 2.5 billion seconds")
