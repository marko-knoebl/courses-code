users = [("Alice", "12345"), ("Bob", "password"), ("Charlie", "abcd")]

login_name = input("Enter your username:")

# benutzer suchen

found = False

for user in users:
    if login_name == user[0]:
        found = True
        password = input("Enter your password:")
        if password == user[1]:
            print("Accepted")
        else:
            print("Wrong password")

if not found:
    print("User not found")
