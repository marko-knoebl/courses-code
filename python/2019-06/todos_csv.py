# read / write a csv file that contains todos

import csv

def write_todos(todos, filename):
    """Take a list of todos and write it to a CSV file."""
    f = open(filename, "w", encoding="utf-8", newline="")
    writer = csv.DictWriter(f, ['title', 'completed'])
    writer.writerows(todos)
    f.close()


def read_todos(filename):
    """Read a list of todos from a CSV file."""
    f = open(filename, encoding="utf-8", newline="")
    reader = csv.reader(f)
    result = []
    for row in reader:
        if row[1] == "True":
            completed = True
        else:
            completed = False
        result.append({
            "title": row[0],
            "completed": completed
        })
    f.close()
    return result


todos_2 = [
    {
        "title": "laundry",
        "completed": True
    },
    {
        "title": "shopping",
        "completed": False
    },
    {
        "title": "taxes",
        "completed": False
    }
]
write_todos(todos_2, "todos.csv")
print(read_todos("todos.csv"))

print(read_todos("todos.csv") == todos_2)
