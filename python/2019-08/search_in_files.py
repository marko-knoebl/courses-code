# Aufgabe: alle Dateien auflisten, die z.B. das Wort "print" enthalten und mit ".py" enden
# - inklusive anzahl der print-Vorkommen

import os

folder_contents = os.listdir(".")

for entry in folder_contents:
    if entry.endswith(".py"):
        with open(entry, encoding="utf-8") as python_file:
            content = python_file.read()
            c = content.count("print")
            if c:
                print(f"{c} occurences of print found in {python_file.name}")

# Zusatz: auch in Unterodnern suchen - siehe os.walk()
