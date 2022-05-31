import random

# return type: list (of integers)
def lottery_numbers(max=49, num=6):
    numbers = []

    for i in range(num):
        number = random.randrange(1, max + 1)
        numbers.append(number)

    return numbers
