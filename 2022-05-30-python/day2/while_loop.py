a = 1

while a < 2000:
    print(a)
    a = a * 2

print("done")

# 1
# 2
# 4
# ...
# 1024

# Exercise:
# a loop that prints the numbers 1 to 10

a = 1

while a <= 10:
    print(a)
    a = a + 1

# Exercise:
# a loop that creates the list [0, 1, 2, ..., 7, 8, 9]

numbers_list = []

a = 0

while a < 10:
    numbers_list.append(a)
    a = a + 1

print(numbers_list)
