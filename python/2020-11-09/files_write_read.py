with open("message.txt", "w", encoding="utf-8") as file:
    file.write("hello world")
    file.write("one")
    file.write("two")

with open("message.txt", encoding="utf-8") as file:
    content = file.read()

print(content)
