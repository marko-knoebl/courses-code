# imports are relative to the executed script

# operations like open are relative to the "working directory"

file = open("demo_files/message.txt", mode="w", encoding="utf-8")
file.write("hello world\n")
file.write("end\n")
file.close()

# TASK: read the file again

file_r = open("demo_files/message.txt", mode="r", encoding="utf-8")
content = file_r.read()
file_r.close()

print(content)

# reading the file using the with statement (will be closed automatically)

with open("demo_files/message.txt", mode="r", encoding="utf-8") as file_r_2:
    content = file_r_2.read()
