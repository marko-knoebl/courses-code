from length import Length

a = Length(100, "cm")
b = Length(120, "cm")
c = Length(20, "in")

print(a)

# führt intern zum Aufruf von _get_unit
print(a.unit)  # cm

# führt intern zum Aufruf von _set_unit
a.unit = "in"

print(a.value)
print(a.unit)

b = Length.from_string("10cm")
print(b)
print(b.value)
print(b.unit)

print(str(a))  # 39.37in
print(repr(a))  # Length(39.37007874015748, "in")

print(a + c + c)
print(a * 2)  # (__mul__)
print(2 * a)  # (__rmul__)
