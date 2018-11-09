# Daten erstellen

person = {}

person["name"] = "Tim"
person["age"] = 53

person["kids"] = []

person["kids"].append("Marie")
person["kids"].append("Mohammed")
person["kids"].append("Ivan")

# person in einen JSON-string verwandeln

import json

jsonstring = json.dumps(person)

print(jsonstring)

# datei speichern

with open('person.json', 'w', encoding="utf-8") as jsonfile:
    jsonfile.write(jsonstring)
