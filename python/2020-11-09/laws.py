print("where are you from (de/uk/us)")
country = input()

print("how old are you?")
age = int(input())

if age >= 18:
    print("you can vote")
else:
    print("you cannot vote")

#if country == "de" and age >= 16:
#    print("you can drink")
#elif country == "uk" and age >= 18:
#    print("you can drink")
#elif country == "us" and age >= 21:
#    print("you can drink")
#else:
#    print("you cannot drink")

if ((country == "de" and age >= 16)
     or (country == "uk" and age >= 18)
     or (country == "us" and age >= 21)):
    print("you can drink")
else:
    print("you cannot drink")

## germany

if age < 16:
    print("you can do nothing")
elif age <18:
    print("you can drink")
else:
    print("you can drink and vote")
