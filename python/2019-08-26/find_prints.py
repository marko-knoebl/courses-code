# find all occurences of the word "print" in files within a folder

# get a list of all files in the current folder
# open each file and:
#    read its content
#    check if the content (string) includes the string "print"
#        (via str_a in str_b)
#    option 1: print all the contents of the file
#    option 2: print just the lines with print in them,
#                  including file name and line number

import os

files = os.listdir(".")
print(files)

for file in files:
    if ".py" in file:
        try:
            with open(file) as file_obj:
                for line in file_obj:
                    if "print" in line:
                        print(f"in {file}:")
                        print(line)
        except IsADirectoryError:
            pass
        except IOError:
            pass
        except Exception:
            pass
