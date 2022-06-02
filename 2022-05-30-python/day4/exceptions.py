# triggering exceptions

# AttributeError
# a = []
# a.push(2)

# IndexError
# a = [1, 2, 3]
# a[3]

# KeyError
# b = {}
# b["foo"]

# NameError
# boy = 1
# print(by)

# ZeroDivisionError
# a = 1 / 0

def foo(x):
    return bar(x)

def bar(x):
    value = 1 + min(x)
    return value

print(foo([1, 2]))
print(foo([]))
