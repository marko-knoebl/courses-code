a = [1, 2, 3]

b = a
b.append(4)
print(a)


c = 3

d = c
d = 4

print(c)

# kopieren

b = a.copy()

# tiefe Kopie

import copy

b = copy.deepcopy(a)

# in der Praxis: list comprehensions
