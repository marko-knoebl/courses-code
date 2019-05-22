logins = [
  ["Alice", "12345"],
  ["Bob", "password"],
  ["Claire", "abcd"]
]

found_user = False

while not found_user:
    username = input("Enter your username:")
    for login in logins:
        if username == login[0]:
            found_user = True
    
    if not found_user:
        print("no such user")
