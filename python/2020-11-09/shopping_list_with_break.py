shopping_list = []

while True:
    print("enter an item or 'x' to quit:")
    reply = input()
    if reply == "x":
        break
    shopping_list.append(reply)

# write the list to "shoppinglist.txt"

with open("shoppinglist.txt", "w", encoding="utf-8") as file:
    file.write("shopping list\n\n")
    for item in shopping_list:
        file.write("- ")
        file.write(item)
        file.write("\n")
