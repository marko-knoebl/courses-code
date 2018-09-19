def modify1(mylist):
    mylist.append(1)
    return mylist

def modify2(mylist):
    return mylist + [1]

a = [0]
b = [0]

print(modify1(a))

print(modify2(b))

print(a)

print(b)
