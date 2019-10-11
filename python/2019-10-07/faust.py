try:
    with open("faust.txt", encoding="latin1") as infile:
        with open("faust_formatted.txt", "w", encoding="utf-8") as outfile:
            i = 0
            for line in infile:
                i += 1
                if i % 5 == 0:
                    # line = line.strip().ljust(80) + str(i).rjust(5) + "\n"
                    line = f"{line.strip().ljust(80)}{str(i).rjust(5)}\n"
                else:
                    line = line.strip() + "\n"
                outfile.write(line)
except FileNotFoundError:
    print("Could not find file faust.txt")
