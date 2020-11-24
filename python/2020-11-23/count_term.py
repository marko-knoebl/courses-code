import os
import os.path


def count_term(term):

    dir_content = os.listdir(".")

    for filename in dir_content:
        try:
            with open(filename, encoding="utf-8") as file:
                file_content = file.read()
        except PermissionError:
            print(f"ignored {filename}")
        print(f"{filename}: {file_content.count(term)}")


count_term("print")

# hello.py: 1 occurences
# othello.py 0 occurences
# ...

count_term("def")

# ...
