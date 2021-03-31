# possible tasks (start at the top, work your way down)

# x read file as a string
# x split string into lines
# x remove leading space
# x line number at the end (right-aligned at character 70)
# x save the result as a new file (othello_new.txt)
# ---
# (place line numbers only in every 5th line)
# (instead of placing line numbers at character 70, use the longest line as a reference)

# read file as a string
# paths are relative to the project directory
infile = open("othello/othello.txt", encoding="utf-8")

content = infile.read()

lines = content.splitlines()
print(len(lines))

# create a list of new - modified - lines
# start with an empty list and fill it via a loop
new_lines = []


for (i, line) in enumerate(lines, 1):
    stripped_line = line.strip()
    # justified_line_with_numer = stripped_line.ljust(70) + " " + str(i)
    justified_line_with_numer = f"{stripped_line:<70}{i:>4}"
    new_lines.append(justified_line_with_numer)


new_content = "\n".join(new_lines)

# ...

outfile = open("othello/othello_new.txt", "w", encoding="utf-8")
outfile.write(new_content)
