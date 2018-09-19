"""Functions for finding primes."""


# pylint: disable=W0622

from typing import List


def is_prime(number: int) -> bool:
    """Determine whether a number is a prime number.

    Return True if the number is prime.
    """
    for i in range(2, number // 3 + 1):
        if number % i == 0:
            return False
    return True


def get_primes(min: int = 2, max: int = 100) -> List[int]:
    """Get all primes within a specified range."""
    primes: List[int] = []
    for i in range(min, max + 1):
        if is_prime(i):
            primes.append(i)
            # primes += [i]
    return primes


# print(get_primes(max=200))


def print_args(*args, **kwargs):
    """Print all arguments and keyword arguments that are passed to this function."""
    print(args, kwargs)


print_args(2, 3, foo="test")
