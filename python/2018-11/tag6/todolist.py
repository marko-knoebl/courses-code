import json


def print_todos(todos):
    for todo in todos:
        print("- " + todo)


print("welcome to the todolist!")

# todolist mit alten todos initialisieren

todolist = []

try:
    with open("todos.txt", encoding="utf-8") as todo_textfile:
        lines = todo_textfile.readlines()
        for line in lines:
            todolist.append(line[2:-1])
    print_todos(todolist)
except FileNotFoundError:
    print("na endlich!")


# neue Todos hinzufügen

answer = ""

while answer != "x":
    answer = input('Enter an item or press "x" to quit:\n')
    if answer != "x":
        todolist.append(answer)

# gib die einzelnen Einträge aus

print_todos(todolist)

# speichern als txt-Datei

with open("todos.txt", "w", encoding="utf-8") as todo_textfile:
    for item in todolist:
        todo_textfile.write("- " + item + "\n")

with open("todos.json", "w", encoding="utf-8") as todo_jsonfile:
    todo_jsonfile.write(json.dumps(todolist))

# speichern als HTML

html_template = """
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Todos</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>
<body>
  <h1>Todo</h1>
  <ul>
    {}
  </ul>
</body>
</html>
"""

todo_html = ""

for todo in todolist:
    todo_html += "<li>" + todo + "</li>"

html_content = html_template.format(todo_html)

with open("todos.html", "w", encoding="utf-8") as todo_htmlfile:
    todo_htmlfile.write(html_content)
