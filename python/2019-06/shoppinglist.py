print("Shopping list")
print("=" * 15 + "\n")

# read previous entries

file = open("shoppinglist.txt", encoding="utf-8")
filecontents = file.read()
lines = filecontents.split("\n")
lines.pop()
file.close()

products = lines
print(products)

while True:
    product = input('enter an item or "x" to quit:')
    quit_answers = ["x", "X", "quit"]
    if product.strip() in quit_answers:
        break
    else:
        if not product in products:
            products.append(product)

print(f"You entered {len(products)} items")
print("Your shopping list is:")
print(products)

file = open("shoppinglist.txt", "w", encoding="utf-8")
filecontents = ""
for product in products:
    filecontents += products + "\n"


file.write(filecontents)
file.close()
