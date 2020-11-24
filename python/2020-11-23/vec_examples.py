# step 1: class "Vec2":

a = Vec2(1, 2)
b = Vec2(3, 4)

a.x # 1
a.y # 2
a.x = -1

b.length() # 5.0

x = a.multiply(3) # Vec2(3, 6)

# same direction, length 1.0
y = a.unit() # Vec2(...)

z = a.add(b) # Vec2(4, 6)



# step 2: class "Vec3" (and new base class "Vec"):

a3 = Vec3(1, 2, 3)



# step 3: advanced object-oriented programming:

a + b
a * 3

Vec3.full(5.0)    # Vec3(5.0, 5.0, 5.0)

str(a) # "Vec2(3, 4)"
a.length = 1.0 # same direction, length 1.0
