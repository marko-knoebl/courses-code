from vec import Vec2, Vec3

a = Vec2(1, 2)
a.x = -1
b = Vec2(3, 4)

print(a)
print(a.x)
print(a.y)

print(b.length)

a_times_3 = a.multiply(3)
print(a_times_3.x, a_times_3.y)

c = Vec3(1, 2, 3)

print(a.length)

print("setting length to 5")
a.length = 5
print(a.length)
print(a)

print("doubling the length")
a.length *= 2
print(a.x)
print(a.y)
print(a.length)

d = Vec2.from_string("(2, 3)")
print(d.x)

print(d)
print([a, d])

print(a + d)
