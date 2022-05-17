numbers = [2, 5, -3, 8, 1, 5]

# print all positive entries, e.g. 2, 5, 8, 1

print("positive entries:")

for number in numbers:
    if number > 0:
        print(number)

# print the biggest element, e.g. 8

biggest = numbers[0]

for number in numbers:
    if number > biggest:
        biggest = number

print("biggest:")
print(biggest)
