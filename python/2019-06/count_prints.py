# count print functions in all python files

# functions:
#   os.walk
#   string.count('abc')

import os

total = 0

# alle python-dateien auflisten
for root, dirs, files in os.walk('.'):
    for filename in files:
        if filename.endswith('.py'):
            filepath = f"{root}\\{filename}"
            print(filepath)
            with open(filepath, encoding="utf-8") as file:
                filecontent = file.read()
                occurences = filecontent.count("print")
                print(occurences)
                total += occurences
print(total)
