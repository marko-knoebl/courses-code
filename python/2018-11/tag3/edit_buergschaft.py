# lies buergschaft.txt und speichere es als buergschaft_modified.txt

# file = open("buergschaft.txt", "r+", encoding="utf-8")
with open("buergschaft.txt", "r+", encoding="utf-8") as file:
    line_list = file.readlines()

modified_line_list = []
# schreibe jedes Element der line_list mit zwei zusätzlichen Leerzeichen
# davor in die modified_line_list
linenr = 1
for line in line_list:

    # zeilenumbrüche löschen
    line = line.rstrip()
    line = "  " + line
    line = line.ljust(60)
    line = line + str(linenr).rjust(3)
    line = line + "\n"

    modified_line_list.append(line)
    modified_line_list.sort()

    linenr += 1

with open("buergschaft_modified.txt", "w", encoding="utf-8") as file:
    for line in modified_line_list:
        file.write(line)
