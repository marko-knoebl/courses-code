from typing import List

sort_me = [3, 9, 4, 5, 2, 7, 6, 1]

def bubblesort(to_sort: List[int]) -> List[int]:
    to_sort = to_sort[:]
    for i in range(len(to_sort)-1):
        entered = False
        for j in range(len(to_sort)-1-i):
            if to_sort[j] > to_sort[j+1]:
                to_sort[j], to_sort[j+1] = to_sort[j+1], to_sort[j]
                entered = True
        if not entered:
            break
    return to_sort

print(bubblesort(sort_me))

print(sort_me)
