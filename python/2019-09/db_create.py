# create a sqlite database in "contacts.db"
# fields: first_name, last_name, telephone

"""Initialize an empty contacts database."""

import sqlite3

connection = sqlite3.connect("contacts.db")

cursor = connection.cursor()
cursor.execute("""
CREATE table contact (
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    telephone VARCHAR(20)
);
""")
connection.commit()

connection.close()
