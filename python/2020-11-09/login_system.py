users = [
    {"name": "Alice", "password": "1234"},
    {"name": "Bob", "password": "password"},
    {"name": "Charlie", "password": "paris41"}
]

user = None

while True:
    print("Enter your username:")
    username = input()
    #  go through all entries of "users" and look for a match
    user_found = False

    for potential_user in users:
        # check if the potential_user matches the user name
        if username == potential_user["name"]:
            user_found = True
            user = potential_user
            break
    
    if user_found == True:
        # at this point a matching user is stored in the "user" variable
        print("found user: " + username)
        break
    else:
        print("could not find user: " + username)

while True:
    print("Enter your password:")
    password = input()

    if password == user["password"]:
        print("Congratulations!")
        break
    else:
        print("Try again!")
