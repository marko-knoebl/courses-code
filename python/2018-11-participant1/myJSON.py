import json

person = {}

person["name"] = "Tim"
person["dob"] = "1975"
person["kids"] = []
person["kids"].extend(["Marie", "Tobias", "Eric"])

# convert to JSON-string
jsonstring = json.dumps(person)

file = open("myJSON.json", "w", encoding="utf-8")
file.write(jsonstring)
file.close()

file_read = open("myJSON.json", "r", encoding="utf-8").read()
jsonstring2 = json.loads(file_read)
print(jsonstring2)