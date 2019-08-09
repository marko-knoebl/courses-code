# enter your email:
# Karley_Dach@jasper.info

# your todos are:
# [ ] explicabo enim cumque porro aperiam occaecati minima (id: 101)
# [X] ad illo quis voluptatem temporibus (id: 106)
# ...


# enter an id to mark a todo as done or press X to exit:
# 101
# Todo 101 marked as done

# your todos are:
# [X] explicabo enim cumque porro aperiam occaecati minima (id: 101)
# [X] ad illo quis voluptatem temporibus (id: 106)
# ...

import requests

print("enter your email:")
email = input()

user = requests.get(f"http://jsonplaceholder.typicode.com/users?email={email}")

user_id = user.json()[0]["id"]
print("user id:")
print(user_id)

user_todos = requests.get(f"http://jsonplaceholder.typicode.com/todos?userId={user_id}").json()

for user_todo in user_todos:
    marker = "[X]" if user_todo["completed"] else "[ ]"
    title = user_todo["title"]
    print(f"{marker} {title}")
