user_input = ""
shoppinglist = []

while user_input != "x":
    user_input = input("enter an item or \"x\" to quit: ")
    if user_input != 'x':
        shoppinglist.append(user_input)

for item in shoppinglist:
    print('- ' + item)

# advanced:
# for index, item in enumerate(shoppinglist):
#     print(str(index) + ': ' + item)


# save to a file

file = open('shoppinglist.txt', 'a+', encoding='utf-8')

for item in shoppinglist:
    file.write('- ' + item + '\n')
