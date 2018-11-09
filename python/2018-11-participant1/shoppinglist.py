shoppinglist = []
entry = "a"
while entry != "x" :
    shoppinglist.append(input("Please enter item or press x to quit: "))
    entry = shoppinglist [-1]
shoppinglist.pop()

# while len(shoppinglist) != 0 :
#     print("- " + str(shoppinglist[-1]))
#     shoppinglist.pop()

for item in shoppinglist :
    print("- " + str(item))
    