print("SHOPPING LIST")

items = []

while True:
    print('enter an item or "x" to quit:')
    item = input()
    if item == "x":
        # break beendet die while-schleife
        break
    else:
        # store the item
        items.append(item)

print("Your shopping list is:")
print(items)

# build a string representation of the list
items_str = ""
for item in items:
    items_str = items_str + "- " + item + "\n"

# save the string to a file
with open("shoppinglist.txt", "w", encoding="utf-8") as file:
    file.write(items_str)
