def foo(arg1=None, arg2="default"):
    print(arg1)
    print(arg2)

foo(1, 2)
foo(arg1=1, arg2=2)

foo(1)

foo()

def my_sum(*args):
    return sum(args)

print(my_sum(1,2,3,4))

def print_args_kwargs(*args, **kwargs):
    print(args)
    print(kwargs)

print_args_kwargs(1, 2, 3, a=34, b=19)

# scope:

a = 0

def change_a():
    print(a)
    

change_a()

print(a)

def modify_a(mylist):
    mylist_copy = mylist[:]
    mylist_copy.append(1)
    return mylist_copy

def modify_b(mylist):
    return mylist + [1]

list_a = [1, 2]
list_a_mod = modify_a(list_a)

list_b = [1, 2]
list_b_mod = modify_b(list_b)

print(list_a_mod)
print(list_b_mod)

print(list_a)
print(list_b)
