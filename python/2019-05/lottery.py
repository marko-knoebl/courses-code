import random

# range(5) -> [0, 1, 2, 3, 4] -> [36, 27, 8, 1, 20]

def lottery(n=5):
    numbers = []
    for i in range(n):
        # add another lottery number
        new_number = random.randint(1, 45)
        numbers.append(new_number)
    return numbers

def lottery_comprehension(n=5):
    return [random.randint(1, 45) for entry in range(n)]
