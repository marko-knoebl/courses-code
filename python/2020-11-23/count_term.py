import os
import os.path

import logging
logging.basicConfig(
    filename="count_term.log",
    level=logging.DEBUG,
    filemode="w"
)

def count_term(term):

    dir_content = os.listdir(".")

    for filename in dir_content:
        try:
            with open(filename, encoding="utf-8") as file:
                file_content = file.read()
        except PermissionError:
            logging.debug(f"ignored {filename}")
            continue
        except UnicodeDecodeError:
            logging.debug(f"ignored {filename}: could not read as unicode text")
            continue
        print(f"{filename}: {file_content.count(term)}")


count_term("print")

# hello.py: 1 occurences
# othello.py 0 occurences
# ...

count_term("def")

# ...
