PEOPLE = [
    {"name": "Andy", "age": 10},
    {"name": "Bert", "age": 20}
]

# for person in people:
#     print("name:", person["name"])
#     print("age:", person["age"])

for person in PEOPLE:
    for entry in person:
        print(entry, person[entry])

for person in PEOPLE:
    for (key, value) in person.items():
        print(key, value)
