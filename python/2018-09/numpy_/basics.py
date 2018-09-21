list_a = [1, 2]
list_b = [3, 4]

list_sum = [list_a[i] + list_b[i] for i in range(2)]

print(list_sum)

import numpy

array_a = numpy.array([1, 2])
array_b = numpy.array([3, 4])

array_sum = array_a + array_b

print(array_sum)

array_c = numpy.array([[1, 2, 3],
                       [2, 4, 6],
                       [3, 6, 9]])
print(array_c)
print(array_c[0][0])