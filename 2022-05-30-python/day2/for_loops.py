names = ["Alice", "Bob", "Charlie"]

for name in names:
    print("Hello, " + name + "!")


# print all positive entries
numbers = [2, 5, -3, 8, 1, -5]

for number in numbers:
    if number > 0:
        print(number)


# print the biggest element
biggest_item = numbers[0]

for number in numbers:
    if number > biggest_item:
        biggest_item = number

print("max:")
print(biggest_item)
