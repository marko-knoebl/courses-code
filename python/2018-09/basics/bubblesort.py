from typing import List
import logging

"""Sort a list.

>>> bubblesort([2, 1, 0])
[0, 1, 2]
>>> bubblesort([1, 2, 3, 4, 5, 6, 7, 8, 9]) #doctest: +NORMALIZE_WHITESPACE
[1, 2, 3, 4, 5,
6, 7, 8, 9]
>>> bubblesort([1, 2, 3, 4, 5, 6, 7, 8, 9]) #doctest: +ELLIPSIS
[1, 2, ..., 8, 9]
"""

logging.basicConfig(
    filename="basics/bubblesort.log",
    filemode="w",
    level=logging.DEBUG
)


def bubblesort(to_sort: List[int]) -> List[int]:
    """Sort a list.

    >>> bubblesort([1, 2, 3, 4])
    [1, 2, 3, 4]
    >>> bubblesort([])
    []
    >>> bubblesort([4, 3, 2, 1])
    [1, 2, 3, 4]
    >>> bubblesort(list(range(13))) #doctest: +NORMALIZE_WHITESPACE
    [0, 1, 2, 3, 4, 5, 6, 7, 8,
    9, 10, 11, 12]
    >>> bubblesort(list(range(100))) #doctest: +ELLIPSIS
    [0, 1..., 99]
    """
    logging.debug(f"sorting list: {to_sort}")
    to_sort = to_sort[:]
    for i in range(len(to_sort) - 1):
        entered = False
        for j in range(len(to_sort) - 1 - i):
            if to_sort[j] > to_sort[j + 1]:
                to_sort[j], to_sort[j + 1] = to_sort[j + 1], to_sort[j]
                logging.debug(f"new list: {to_sort}")
                entered = True
        if not entered:
            break
    return to_sort

logging.debug("test")

print(bubblesort([5, 2, 8, 2, 3]))

if __name__ == "__main__":
    import doctest

    doctest.testmod()
