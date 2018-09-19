n_str = input("Enter a number:")

n = float (n_str)

a = 1.0
b = n

for i in range(10):
    a = (a + b) / 2
    b = n / a

print('a:', a, 'b:', b)
