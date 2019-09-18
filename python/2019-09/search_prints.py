# go through all files that end in .py
# look for lines containing the word "print"
# for each of these, print the file name and the line

import os

print(os.listdir())

for entry in os.listdir():
    try:
        with open(entry, encoding="utf-8") as file:
            for line in file:
                if "print" in line:
                    print(entry, ":")
                    print("-", line.lstrip(), end="")
    except UnicodeDecodeError as e:
        print("Did not search file: " + entry)
        print("Error:")
        print(e)
    except IsADirectoryError as e:
        pass
    except Exception as e:
        # catches all other exceptions
        print("Unexpected exception:")
        print(e)
