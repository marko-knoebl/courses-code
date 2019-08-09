a = 3
b = a
a = 4

print(b)

list_a = [a, b]
a = 5

print(list_a)

list_b = list_a

print(list_b)

list_a[0] = 6

print(list_b)

list_c = list_a[:]
list_a[0] = 7

print(list_c)

nested_list = [list_a, list_c]
nested_list_copy = nested_list[:]
nested_list[0][0] = 8

print(list_a)
print(nested_list_copy)
