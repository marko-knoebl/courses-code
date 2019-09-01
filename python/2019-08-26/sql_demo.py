import sqlite3

connection = sqlite3.connect('contacts.db')

cursor = connection.cursor()

def init_db():
    cursor.execute(
        """
        CREATE TABLE contacts (
            first_name VARCHAR(50),
            last_name VARCHAR(50)
        );
        """
    )
    connection.commit()

def add_person():
    cursor.execute(
        """
        INSERT INTO contacts (first_name, last_name)
        VALUES ('Tom', 'Smith');
        """
    )
    connection.commit()

def add_person_interactive():
    first_name = input("first name:")
    last_name = input("last name:")
    cursor.execute(
        """
        INSERT INTO contacts (first_name, last_name)
        VALUES (?, ?);
        """,
        (first_name, last_name)
    )
    connection.commit()

def get_all():
    cursor.execute(
        """
        SELECT first_name, last_name FROM contacts;
        """
    )
    return cursor.fetchall()

# init_db()

add_person()
add_person_interactive()
print(get_all())

connection.close()
