a = 0
b = 1
i = int(input("How many Fibonacci-numbers? "))
fib = []
for j in range(i):
    a,b = b,a+b
    fib.append(a)
print(fib)
