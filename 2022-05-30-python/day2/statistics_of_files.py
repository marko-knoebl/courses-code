# task:
# go through the files in the folder "day1"
# print their names
# print the number of characters in them

import os

# get a list of files:

folder_content = os.listdir("day1")

for item in folder_content:
    print(item)
    # for all python files, count the number of characters
    if item.endswith(".py"):
        file = open("day1/" + item, encoding="utf-8")
        content = file.read()
        print(len(content))
