age = 30
age_seconds = age * 365 * 24 * 60 * 60

if age_seconds < 100000000:
    print("You are les than 100 million seconds old")
    print("You are very young!")
elif age_seconds < 1000000000:
    print("You are between 100 million and 1 billion seconds old")
elif age_seconds < 2000000000:
    print("You are between 1 billion and 2 billion seconds old")
else:
    print("You are older than 2 billion seconds")
