from quantity import Quantity

a = Quantity("km", 2)

print(a)
print(a.amount)
print(a.unit)

print(a + a)

print(3 * a)
print(a * 3)

c = a + a

c.amount

b = Quantity("s", 2)

print(a + b)
