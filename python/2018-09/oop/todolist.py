import json
import pickle


class TodoList:
    def __init__(self, title):
        self.title = title
        self.todos = []

    def add(self, title):
        self.todos.append(Todo(title))

    def stats(self):
        count_completed = 0
        for todo in self.todos:
            assert isinstance(todo, Todo)
            if todo.completed:
                count_completed += 1
        count_not_completed = len(self.todos) - count_completed
        return {"completed": count_completed, "open": count_not_completed}

    def save(self, path):
        todos_plain = []
        for todo in self.todos:
            plain_todo = {"title": todo.title, "completed": todo.completed}
            todos_plain.append(plain_todo)
        data_string = json.dumps(todos_plain, indent=4)
        with open(path, mode="w", encoding="utf-8") as file:
            file.write(data_string)

    def save_pickle(self, path):
        with open(path, mode="wb") as file:
            pickle.dump(self.todos, file)

class Todo:
    def __init__(self, title):
        self.title = title
        self.completed = False

    def toggle(self):
        self.completed = not self.completed


t = TodoList("groceries")
print(t.title)
print(t.todos)

t.add("apples")
t.add("bananas")

print(t.todos)

t.todos[1].toggle()

print(t.todos)
print(t.todos[1].completed)

print(t.stats())

a = t.stats

t.save("./oop/todos.json")
t.save_pickle("./oop/todos.pickle")
