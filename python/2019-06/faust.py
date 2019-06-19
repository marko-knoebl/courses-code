with open("faust.txt", encoding="latin-1") as file:
    content = file.read()

print(content)

# find maximum line length
max_linelength = 0

for line in content.splitlines():
    linelength = len(line)
    if linelength > max_linelength:
        max_linelength = linelength

print(max_linelength)

# create the content

new_content = ""
line_number = 1

# for line in content.splitlines():
#     line = line.strip()
#     # new_content += (
#     #     line
#     #     + " " * (max_linelength + 5 - len(line))
#     #     + " " * (4 - len(str(line_number)))
#     #     + str(line_number)
#     #     + "\r\n"
#     # )
#     new_content += line.ljust(max_linelength + 5) + str(line_number).rjust(4) + "\r\n"
#     line_number += 1

for i, line in enumerate(content.splitlines()):
    line = line.strip()
    new_content += line.ljust(max_linelength + 5) + str(i + 1).rjust(4) + "\r\n"


print(new_content)


with open("faust_new.txt", mode="w", encoding="utf-8", newline="") as new_file:
    new_file.write(new_content)
