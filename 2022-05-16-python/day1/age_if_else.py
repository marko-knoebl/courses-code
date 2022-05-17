print("What is your age?")
age = int(input())
age_seconds = age * 365 * 24 * 60 * 60

if age_seconds < 100000000:
    print("You are younger than 100 million seconds")
    print("You are really young")
elif age_seconds < 1000000000:
    print("You are younger than 1 billion seconds")
    print("You are quite young")
elif age_seconds < 2000000000:
    print("You are younger than 2 billion seconds")
else:
    print("You are older than 2 billion seconds")
    print("You are quite old")

    print("foo")
print("Bye")
