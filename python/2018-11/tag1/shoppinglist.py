print("welcome!")

answer = ''

shoppinglist = []

while answer != "x":
    answer = input('Enter an item or press "x" to quit:\n')
    if answer != 'x':
        shoppinglist.append(answer)

# entferne ein Element nach dem anderen und gib es aus

# while shoppinglist != []:
#     first_entry = shoppinglist[0]
#     print('- ' + first_entry)
#     shoppinglist.pop(0)

# gib die einzelnen Einträge aus

for item in shoppinglist:
    print('- ' + item)
