# search for "print" in all .py files

# bonus:
# how many occurences per file?
# line numbers?

# example output:
# age.py, average.py, banking.py, ...


import os

for filename in os.listdir():
    if filename.endswith(".py"):
        with open(filename, encoding="utf-8") as file:
            filecontent = file.read()
            num_print = filecontent.count("print")
            if num_print > 0:
                print(f"{filename}: {num_print}")
