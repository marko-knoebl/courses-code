import sqlite3

connection = sqlite3.connect("database.db")

print("current data:")
cursor = connection.cursor()
cursor.execute("SELECT name, tel FROM person;")
print(cursor.fetchall())

cursor = connection.cursor()
while True:

    cont = input("add a person? (y/n)")
    if cont != "y":
        break

    name = input("enter name: ")
    tel = input("enter tel: ")

    cursor.execute("""
        INSERT INTO person (name, tel)
        VALUES (?, ?);
        """,
        (name, tel)
    )
connection.commit()

connection.close()
