import sqlite3

connection = sqlite3.connect("databases/contacts.db")

cursor = connection.cursor()
cursor.execute(
    """
    CREATE TABLE IF NOT EXISTS person(
        name VARCHAR(50),
        tel VARCHAR(20)
    );
"""
)

connection.commit()
connection.close()
