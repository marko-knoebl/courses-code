import sqlite3

connection = sqlite3.connect("contacts.db")

cursor = connection.cursor()
cursor.execute(
    """
    SELECT *
    FROM contact;
    """
)

results = cursor.fetchall()

connection.close()

print(results)
