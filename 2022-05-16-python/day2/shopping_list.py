shopping_list = []

print('enter an item or "x" to quit:')
item = input()

shopping_list.append(item)

while item != "x":
    print('enter an item or "x" to quit:')
    item = input()
    if item != "x":
        shopping_list.append(item)

print("list is completed")

for shopping_item in shopping_list:
    print("-" + shopping_item)
