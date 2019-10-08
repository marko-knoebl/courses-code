users = [
    {"name": "Alice", "password": "1234"},
    {"name": "Bob", "password": "password"},
    {"name": "Charlie", "password": "paris41"},
]

found_username = None
found_password = None

# repeat as long as the user hasn't been found
while not found_username:
    print("Enter your username:")
    username = input()

    # find the requested user in the users-list

    for user in users:
        # compare the requested name with the actual name
        if user["name"] == username:
            print("found!")
            found_username = username
            found_password = user["password"]


# request the password
for i in range(3):
    print(f"Attempt {i+1}")
    print("Enter the password for " + username + ":")
    password = input()
    if found_password == password:
        print("LOGGED IN!")
        # exit the loop
        break
    else:
        print("INCORRECT PASSWORD!")
