year = int(input("Enter a year: "))

if year % 400 == 0:
    print(f"{year} is a leap year because it's divisible by 400.")
elif year % 100 == 0:
    print(f"{year} is not a leap year because it's divisible by 100.")
elif year % 4 == 0:
    print(f"{year} is a leap year because it's divisible by 4.")
else:
    print(f"{year} is not a leap year.")

if year % 400 == 0 or (year % 4 == 0 and year % 100 != 0):
    print(f"{year} is a leap year")
else:
    print(f"{year} is not a leap year.")
