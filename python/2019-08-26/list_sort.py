names = ["Alice", "Charlie", "Bob"]

print(sorted(names, key=len))

names.sort(key=len)
print(names)

# sortieren nach dem zweiten Buchstaben

names.sort(key=lambda name: name[1])
print(names)


def get_second_letter(name):
    return name[1]


names.sort(key=get_second_letter)
print(names)
