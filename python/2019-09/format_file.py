# read a file (e.g. isbn.py)
# create a file with line numbers (e.g. isbn_with_linenumbers.txt)

new_content = ""

with open("isbn.py", encoding="utf-8") as infile:
    linenumber = 0
    for line in infile:
        linenumber += 1
        new_content += (line[:-1].lstrip().ljust(80) +
                        str(linenumber).rjust(4) + "\n")
        line_text = line[:-1].lstrip()
        new_content += f"{line_text:<80}{linenumber:>4}\n"


with open("isbn_with_linenumbers.txt", "w", encoding="utf-8") as outfile:
    outfile.write(new_content)
