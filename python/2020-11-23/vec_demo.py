from vec import Vec2, Vec3

a = Vec2(1, 2)
a.x = -1
b = Vec2(3, 4)

print(a)
print(a.x)
print(a.y)

print(a.length())
print(b.length())

a_times_3 = a.multiply(3)
print(a_times_3.x, a_times_3.y)

c = Vec3(1, 2, 3)

