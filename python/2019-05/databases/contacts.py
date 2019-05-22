import sqlite3

connection = sqlite3.connect("databases/contacts.db")

cursor = connection.cursor()

name = input("enter your name: ")
tel = input("enter your phone number: ")

# TODO: only enter a person if it doesn't exist

cursor.execute(
    """
    INSERT INTO person (name, tel)
    VALUES (?, ?);
    """,
    (name, tel),
)
connection.commit()

cursor.execute("""SELECT name, tel FROM person;""")
print(cursor.fetchall())

search_name = input("enter a name:")

cursor.execute("""
    SELECT name, tel
    FROM person
    WHERE name=?;
""",
    [search_name]
)
person = cursor.fetchone()

print(f"The telephone number for {person[0]} is {person[1]}.")


connection.close()
