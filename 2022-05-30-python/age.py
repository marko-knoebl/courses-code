age = 32
age_seconds = age * 365 * 24 * 60 * 60

print("PART 1")

if age_seconds < 1000000000:
    print("You are less 1 billion seconds old")
    print("You are quite young")
else:
    print("You are older than 1 billion seconds")
    print("You are not that young anymore")

print("PART 2")

if age_seconds < 100000000:
    print("You are less than 100 million seconds old")
elif age_seconds < 1000000000:
    print("You are less than 1 billion seconds old")
elif age_seconds < 2000000000:
    print("You are less than 2 billion seconds old")
else:
    print("You are older than 2 billion seconds")

print("Good bye")
