import random


def lottery(max: int = 49, n: int = 5):
    """Return a list of lottery numbers."""
    numbers = []

    for i in range(n):
        new_number = random.randint(1, max)
        numbers.append(new_number)

    return numbers


def lottery_alt(max: int = 49, n: int = 5):
    return random.sample(range(1, max + 1), n)
