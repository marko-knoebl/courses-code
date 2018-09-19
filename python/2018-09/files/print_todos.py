todo_file = open("./files/todos.txt", mode="a", encoding="utf-8")
todo_file.write("Küche putzen\n")
todo_file.close()

todo_file = open("./files/todos.txt", encoding="utf-8")
content = todo_file.read()
print(content)
todo_file.close()
