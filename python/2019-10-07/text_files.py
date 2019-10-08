# reading / writing text files

# writing

with open("message.txt", "w", encoding="utf-8") as file:
    file.write("Hello world")

# reading

with open("message.txt", "r", encoding="utf-8") as file_r:
    content = file_r.read()

print(content)
