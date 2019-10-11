from lrange import lrange

print(lrange(11))
print(lrange(5, 11))
print(lrange(5, 11, 2))
print(lrange(0, 10, 0.5))
# Errors:
# print(lrange())
# print(lrange(0, 10, -1))
# print(lrange("2"))
