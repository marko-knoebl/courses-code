def my_range(*args):
    if len(args) == 1:
        i = 0
        upper_bound = args[0]
        step = 1
    elif len(args) == 2:
        i = args[0]
        upper_bound = args[1]
        step = 1
    elif len(args) == 3:
        i = args[0]
        upper_bound = args[1]
        step = args[2]
    else:
        raise TypeError("Wrong number of arguments")

    l = []
    while i < upper_bound:
        l.append(i)
        i += step

    return l

print(my_range(5))
print(my_range(2, 10))
print(my_range(2, 10, 3))
