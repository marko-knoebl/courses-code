import random


def lottery(max=49, n=6):
    """Generate a list of n random numbers in the range between 1 and max"""

    numbers = []

    for _ in range(n):
        number = random.randint(1, max)
        numbers.append(number)

    return numbers


print(lottery())
print(lottery())
print(lottery(45, 5))
