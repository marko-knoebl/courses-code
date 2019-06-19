# Benutzer nach Geburtsjahr fragen
# Alter im Jahr 2019 ausgeben

birth_year_str = input("When were you born?")
# convert from str to int
birth_year_int = int(birth_year_str)
this_year = 2019
age = this_year - birth_year_int

print(f"You are {age} years old.")

age_seconds = age * 365 * 24 * 60 * 60

if age_seconds < 10 ** 8:
    print("You are younger than 100 million seconds")
    print("You are very young!")
elif age_seconds < 10 ** 9:
    print("You are younger than 1 billion seconds")
elif age_seconds < 2 * 10 ** 9:
    print("You are younger than 2 billion seconds")
else:
    print("You are older than 2 billion seconds")
