# Ausführbar via Run - Run...

print("Hello. What is your name?")
name = input()

print(f"Hello, {name}. Your name is {len(name)} characters long.")

print("When were you born?")

# input always returns a string
year_str = input()
year = int(year_str)

age = 2019 - year

print(f"You are {age} years old.")
