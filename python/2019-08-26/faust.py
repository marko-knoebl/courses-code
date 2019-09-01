INFILE = "faust.txt"
OUTFILE = "faust_new.txt"

# Wie lang ist die längste Zeile?

max_linelength = -1

with open(INFILE, encoding="utf-8") as infile:
    with open(OUTFILE, encoding="utf-8", mode="w", newline="\r\n") as outfile:
        for (i, line) in enumerate(infile):
            line_stripped = line.strip()
            if len(line_stripped) > max_linelength:
                max_linelength = len(line_stripped)
            new_line = f"{line_stripped:<80}{i+1:>4}\n"
            outfile.write(new_line)

print(max_linelength)
