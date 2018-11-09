n = 12345

a = n
b = 1

while abs(a-b) > 0.001:
    # neues a
    new_a = (a + b) / 2
    # neues b
    new_b = n / new_a
    print(new_a)
    print(new_b)
    a = new_a
    b = new_b
