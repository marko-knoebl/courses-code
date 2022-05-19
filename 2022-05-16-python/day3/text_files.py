# create a file

file1 = open("message.txt", "w", encoding="utf-8")

file1.write("hello world\n")
file1.write("end\n")

file1.close()

# read the same file

file2 = open("message.txt", encoding="utf-8")
content = file2.read()
file2.close()

print(content)

# read by using with (closes file automatically)

with open("message.txt", encoding="utf-8") as file3:
    content = file3.read()

print(content)
