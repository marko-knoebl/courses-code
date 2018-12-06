import sqlite3

import os

# Bestehende Datenbank löschen
try:
    os.remove("todo.db")
except FileNotFoundError:
    # tue nichts
    pass

connection = sqlite3.connect("todo.db")

cursor = connection.cursor()
cursor.execute(
    "CREATE TABLE todo(id INTEGER NOT NULL PRIMARY KEY, title TEXT, completed INTEGER);"
)
connection.commit()

# Beispieleintrag
cursor.execute(
    """INSERT INTO todo(title, completed) VALUES ('cleaning', 0);"""
)
connection.commit()

connection.close()
