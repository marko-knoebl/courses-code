shopping_list = []

print("enter an item or \"x\" to quit:")
reply = input()
# check the last reply
# if the last reply was not "x",
# add it to the list and ask the user again
while reply != "x":
    shopping_list.append(reply)
    print('enter an item or "x" to quit:')
    reply = input()

print(shopping_list)
