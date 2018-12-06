import sqlite3

connection = sqlite3.connect("todo.db")
cursor = connection.cursor()

# alle todos auflisten
def get_all_todos():
    cursor.execute("""SELECT * FROM todo""")
    result = cursor.fetchall()
    connection.commit()
    return result


# neues todo hinzufügen
def add_todo(title):
    cursor.execute("""INSERT INTO todo (title, completed) VALUES (?, 0);""", (title,))
    connection.commit()


# todo "umschalten"
def toggle_todo(id):
    # todo suchen
    cursor.execute(f"""SELECT completed FROM todo WHERE id={id}""")
    result = cursor.fetchall()
    try:
        is_completed = result[0][0]
    except IndexError:
        pass
    if is_completed == 0:
        new_completed = 1
    else:
        new_completed = 0
    # todo verändert eintragen
    cursor.execute(f"""UPDATE todo SET completed={new_completed} WHERE id={id}""")
    connection.commit()


# alle erledigten löschen
def delete_completed():
    cursor.execute("""DELETE FROM todo WHERE completed=1;""")
    connection.commit()
