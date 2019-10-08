from random import randint


def lottery(max=49, n=6):
    """Generate a list of lottery numbers.

    Generate a list of length n
    Each number will be in the range 1..max
    """
    numbers = []

    # (with duplicates)
    # for i in range(n):
    #     number = randint(1, max)
    #     numbers.append(number)

    for i in range(n):
        while True:
            # keep generating random numbers
            # - until we find one that's not in
            # the numbers list
            new_number = randint(1, max)
            if new_number not in numbers:
                numbers.append(new_number)
                break

    return numbers
