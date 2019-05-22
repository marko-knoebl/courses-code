# todo manager

# 1. read todos from a file (XML)

# options for the user:

# - add new todo
# - remove completed todos
# - save to XML again

import xml.etree.ElementTree as et

import todos_to_xml

print("Welcome to the todo manager")
print("loading todos from xml file...")

with open("reading_writing_files/todos.xml", encoding="utf-8") as todofile:
    xmlstring = todofile.read()
todos_xml = et.fromstring(xmlstring)

# store xml contents in a list of dictionaries

todos = []

for todo_xml in todos_xml:
    todo_dict = {"id": int(todo_xml.attrib["id"]), "title": todo_xml.text}
    if todo_xml.attrib["completed"] == "true":
        todo_dict["completed"] = True
    else:
        todo_dict["completed"] = False
    todos.append(todo_dict)

while True:
    print(todos)
    print(
        """
    What do you want to do?
    - add a todo [a]                   - implement this
    - delete all completed todos [d]   - change this to a list comprehension
    - save to file [s]                 - implement this
    - toggle a todo [t]                - implement
    - exit [x]
    """
    )

    user_input = input()

    if user_input == "d":
        todos = [todo for todo in todos if todo["completed"] == False]

    # longer version:
    # if user_input == "d":
    #     # delete all completed todos
    #     incomplete_todos = []
    #     for todo in todos:
    #         if not todo["completed"]:
    #             incomplete_todos.append(todo)
    #     todos = incomplete_todos

    elif user_input == "s":
        tree = todos_to_xml.todos_to_xml(todos)
        tree.write("reading_writing_files/todos.xml", encoding="utf-8")

    elif user_input == "x":
        break
