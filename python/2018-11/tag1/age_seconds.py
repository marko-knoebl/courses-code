age = 30
age_seconds = age * 365 * 24 * 60 * 60

if age_seconds < 10**9:
    print("You are less than 1 billion seconds old")
    print(f"You are {age_seconds} seconds old")
elif age_seconds < 2 * 10**9:
    print("You are between 1 billion and 2 billion seconds old")
else:
    print("You are older than 1 billion seconds")
