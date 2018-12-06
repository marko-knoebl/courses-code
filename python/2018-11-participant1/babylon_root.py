import math
# Babylonisches Wurzelziehen: Näherung von a an b
n = int(input("Babylonic square root of: "))
a = 1
b = n

while abs(a-b) > 1/1000 :
    a_i = (a+b)/2
    b_i = n/a

    a = a_i
    b = b_i

print(str(a) + " " + str(b))
print(str(math.sqrt(n)))