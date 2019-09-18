import json
import csv
from urllib.request import urlopen

user_ids = [1, 5, 7]
base_url = "https://jsonplaceholder.typicode.com/users/"

user_data_full = []

for user_id in user_ids:
    user_bytes = urlopen(base_url + str(user_id)).read()
    user_str = user_bytes.decode("utf-8")
    user = json.loads(user_str)
    user_data_full.append(user)

print(user_data_full)

user_data = [["name", "email", "phone", "address"]]


for user in user_data_full:
    user_row = [user["name"], user["email"], user["phone"], user["address"]["city"]]
    user_data.append(user_row)

print(user_data)

with open("users.csv", "w", encoding="utf-8", newline="") as csvfile:
    writer = csv.writer(csvfile)
    writer.writerows(user_data)


