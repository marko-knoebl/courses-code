def modify1(mylist):
    mylist.append(1)
    return mylist


def modify2(mylist):
    return mylist + [1]


list1 = [0, 0]

list2 = [0, 0]

list1_new = modify1(list1)

list2_new = modify2(list2)

print(list1_new)
print(list2_new)

print(list1)
print(list2)
