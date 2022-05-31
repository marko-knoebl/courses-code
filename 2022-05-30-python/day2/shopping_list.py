# shopping list

# interaction with the user:

# Welcome to the shopping list program!
# Do you want to add an item to your shopping list? (y / n)
# y
# Enter the name:
# bread
# Do you want to add an item to your shopping list? (y / n)
# y
# Enter the name:
# water
# Do you want to add an item to your shopping list? (y / n)
# n
# Your shopping list is:
# - bread
# - water
# - fruit

print("Welcome!")

items = []

should_continue = "y"

while should_continue == "y":
    print("Enter the name of the item:")
    item = input()
    items.append(item)
    print("Do you want to add an item to your shopping list? (y / n)")
    should_continue = input()

print("Your shopping list is:")

for item in items:
    print("- " + item)

# extra: save items in a file

file = open("demo_files/shopping.txt", mode="w", encoding="utf-8")
for item in items:
    file.write("- " + item + "\n")
file.close()
