import os

# count how many files have "print" inside them

# example output:
# "there are 6 files with (a) print statement(s) inside of them "

for element in os.walk('.'):
    basepath = element[0]
    for filename in element[2]:
        try:
            with open(basepath + '/' + filename, encoding="utf-8") as file:
                file_content = file.read()
                if "break" in file_content:
                    count = file_content.count("break")
                    print("found in:", filename, count)
        except UnicodeDecodeError:
            # do nothing
            print("did not search in non-text file:", filename)

# implemetation: use os.walk, use open()

# for item in os.walk -> (directory, subdirectories, files in directory)


# github.com/marko-knoebl/courses-code

# LINK: karuga.eu/courses-presentations
#         Python in practice
#         Python intermediate