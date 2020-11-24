with open("othello.txt", encoding="utf-8") as infile:
    text = infile.read()

lines = text.splitlines()
modified_lines = []

for i, line in enumerate(lines):
    modified_lines.append(f"{line.lstrip():<70} {i:>4}")
    modified_lines.append("{0:<70} {1:>4}".format(line.lstrip(), i))
    modified_lines.append(line.lstrip().ljust(70) + str(i).rjust(5))
    if len(line) >= 70:
        print(i)

outfile = open("othello-formatted.txt", "w", encoding="utf-8")
for line in modified_lines:
    outfile.write(line + "\n")
outfile.close()
