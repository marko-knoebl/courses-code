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

while True:
    print("Do you want to add an item to your shopping list? (y / n)")
    should_continue = input()
    if should_continue != "y":
        break
    print("Enter the name of the item:")
    item = input()
    items.append(item)

print("Your shopping list is:")

for item in items:
    print("- " + item)

a = round(3.7)

