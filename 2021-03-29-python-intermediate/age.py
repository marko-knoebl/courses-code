def age():
    print("When were you born?")
    birth_year_str = input()
    try:
        birth_year_int = int(birth_year_str)
    except ValueError:
        print(f"Invalid birth year: {birth_year_str}")
    else:
        age = 2021 - birth_year_int
        print(f"You are {age} years old.")


age()


def age_lbyl():
    print("When were you born?")
    birth_year_str = input()
    if birth_year_str.isdigit():
        birth_year_int = int(birth_year_str)
        age = 2021 - birth_year_int
        print(f"You are {age} years old.")
    else:
        print(f"Invalid birth year: {birth_year_str}")

age_lbyl()
