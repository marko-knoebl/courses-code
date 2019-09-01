a = 1
b = 1

def foo():
    a = 2
    print(a)
    global b
    b = 2
    print( b)

foo()

print(a)
print(b)
