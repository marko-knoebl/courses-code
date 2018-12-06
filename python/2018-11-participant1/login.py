users = [
    ("Alice", "password"),
    ("Bob", "qwertz"),
    ("Malice", "12345")
]
found = False
login_name = input("Enter login name: ")

for user in users:
    if login_name == user[0] :
        found = True
        password = input("Enter password: ")
        if password == user[1] :
            print("Accepted")
        else:
            print("access denied!")

if not found :
    print("User not found")






