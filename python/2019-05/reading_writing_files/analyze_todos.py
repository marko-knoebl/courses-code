# manually downloaded data from jsonplaceholder.typicode.com
# - json file of 200 todos

import json

with open('reading_writing_files/todos.json', encoding='utf-8') as todofile:
    todostring = todofile.read()

tododata = json.loads(todostring)

num_todos = len(tododata)
print(f"{num_todos} todos")

num_completed = 0
for todo in tododata:
    if todo["completed"] == True:
        num_completed += 1

print(f"{num_completed} completed")
print(f"{num_todos-num_completed} incomplete")


print('-' * 80)

# print the first 10 incomplete todos

num_printed = 0
index = 0

while num_printed < 10:
    todo = tododata[index]
    if todo["completed"] == False:
        print(todo["title"])
        num_printed += 1
    index += 1

# find all incomplete todos

# entry: {id: .., completed: ...}

incomplete_todos = [
    entry['title'] for entry in tododata if not entry['completed']
]

print(incomplete_todos)
