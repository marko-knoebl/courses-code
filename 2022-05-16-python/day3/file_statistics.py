# list text files in the directory with their size

import os

directory_contents = os.listdir("multiplication_tables")

for filename in directory_contents:
    # print the length of all text files
    if filename.endswith(".txt"):
        # tries to open e.g. "multiplication_table_1.txt"
        # should open "multiplication_tables/multiplication_table_1.txt"
        with open("multiplication_tables/" + filename, encoding="utf-8") as file:
            content = file.read()
            print(filename)
            print(len(content))
