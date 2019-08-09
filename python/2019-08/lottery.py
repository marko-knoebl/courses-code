import random

def lottery(n=6, max=49):
    """Return a list of n numbers from 1 to max.
    
    By default, returns a list of numbers that correspond
    to a German lottery drawing.
    """

    numbers = []

    for _ in range(n):
        number = random.randint(1, max)
        numbers.append(number)

    return numbers
