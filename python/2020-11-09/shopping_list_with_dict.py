import json

shoppinglist = [
    {"item": "apple", "amount": 2},
    {"item": "banana", "amount": 4}
]

while True:
    print("what do you want to buy? (x to quit)")
    new_item = input()
    if new_item == "x":
        break

    item_found = False
    for item in shoppinglist:
        if item["item"] == new_item:
            item["amount"] = item["amount"] + 1
            item_found = True
    # if no previous entry matched - add a new entry
    if not item_found:
        shoppinglist.append({"item": new_item, "amount": 1})

print(shoppinglist)

jsonstring = json.dumps(shoppinglist)
with open("shoppinglist.json", "w", encoding="utf-8") as file:
    file.write(jsonstring)
