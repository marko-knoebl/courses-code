from typing import List

names: List[str] = ["Alice", "Bob", "Charlie"]

uppercase_names = [name.upper() for name in names]
print(uppercase_names)

short_names = [name for name in names if len(name) <= 5]
print(short_names)

# lange Namen ersetzen durch None
short_names_1 = [name if len(name) <= 5 else None for name in names]
print(short_names_1)

# filtern und abändern - kurze Namen groß geschrieben
short_names_upper = [name.upper() for name in names if len(name) <= 5]
print(short_names_upper)
