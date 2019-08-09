import sqlite3

connection = sqlite3.connect("database.db")

cursor = connection.cursor()
cursor.execute("""
CREATE TABLE person(
    name VARCHAR(50),
    tel VARCHAR(20)
);
""")
connection.commit()

connection.close()
