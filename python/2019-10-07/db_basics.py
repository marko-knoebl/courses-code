import sqlite3
from datetime import date

connection = sqlite3.connect("contacts.db", detect_types=sqlite3.PARSE_DECLTYPES)


def init():
    """Initialize the database with a table 'person'.
    """
    cursor = connection.cursor()
    cursor.execute(
        """
        CREATE TABLE person(
            first_name VARCHAR(50),
            last_name VARCHAR(50),
            date_of_birth DATE
        );
        """
    )
    connection.commit()


def insert_entries():
    cursor = connection.cursor()
    cursor.execute(
        """
        INSERT INTO person (first_name, last_name, date_of_birth)
        VALUES (?, ?, ?);
        """,
        ("Tom", "Baker", date(1970, 4, 12)),
    )
    cursor.execute(
        """
        INSERT INTO person (first_name, last_name, date_of_birth)
        VALUES (?, ?, ?);
        """,
        ("Anne", "Baker", date(1972, 5, 10)),
    )
    connection.commit()


def insert_entry_interactive():
    # ask user for first name, last name and birth year
    while True:
        print("first name:")
        first_name = input()
        if first_name:
            break
    print("last name:")
    last_name = input()
    while True:
        print("date of birth (YYYY-MM-DD):")
        try:
            birth_year = date.fromisoformat(input())
            break
        except ValueError:
            print("invalid date format")

    cursor = connection.cursor()
    cursor.execute(
        """
        INSERT INTO person (first_name, last_name, date_of_birth)
        VALUES (?, ?, ?);
        """,
        (first_name, last_name, birth_year),
    )
    connection.commit()


def get_all():
    cursor = connection.cursor()
    cursor.execute(
        """
        SELECT first_name, last_name, date_of_birth
        FROM person;
        """
    )
    return cursor.fetchall()

