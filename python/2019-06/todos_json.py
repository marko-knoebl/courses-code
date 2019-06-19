import json

todos = [
    {"title": "laundry", "completed": True},
    {"title": "shopping", "completed": False},
    {"title": "taxes", "completed": False},
]

# ["shopping", "taxes"]
incomplete_todos = [todo["title"] for todo in todos if not todo["completed"]]

# ["laundry"]
complete_todos = [todo["title"] for todo in todos if todo["completed"]]

print(incomplete_todos)
print(complete_todos)

# "manuelle" Lösung:
incomplete_todos = []
for todo in todos:
    if not todo["completed"]:
        incomplete_todos.append(todo["title"])

jsonstring = json.dumps(todos)
with open("todos.json", encoding="utf-8", mode="w") as jsonfile:
    jsonfile.write(jsonstring)

with open("todos.json", encoding="utf-8", mode="w") as jsonfile:
    json.dump(todos, jsonfile)

with open("todos.json", encoding="utf-8") as jsonfile:
    jsonstring = jsonfile.read()
todos_2 = json.loads(jsonstring)

# test: round-tripping
print(todos == todos_2)
