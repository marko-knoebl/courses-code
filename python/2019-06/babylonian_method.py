number = float(input("Enter a number: "))

a = 1
b = number

while abs(a - b) > 1e-10:
    a = (a + b) / 2
    b = number / a

    print(a)
