a = [1, 2, 3]
b = a.copy()
b.append(4)

print(a)

#print("Hello. What is your name?")
#name = input()
#print("Nice to meet you, " + name)

#birth_year_str = input("When were you born?\n")
# converting a string to an integer
#birth_year_int = int(birth_year_str)
#age = 2019 - birth_year_int

#print(f"You are {age} years old.")

import random
from datetime import datetime

print(random.randint(1, 6))
print(datetime.now())


a = 2
def foo():
    global a
    a = 3
    print(a)

foo()
print(a)


