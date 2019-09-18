import sqlite3

connection = sqlite3.connect("contacts.db")

first_name = input("first name: ")
last_name = input("last name: ")
tel = input("telephone nr: ")

cursor = connection.cursor()
cursor.execute(
    """
    INSERT INTO contact (first_name, last_name, telephone)
    VALUES (?, ?, ?);
    """,
    (first_name, last_name, tel)
)
connection.commit()

connection.close()
