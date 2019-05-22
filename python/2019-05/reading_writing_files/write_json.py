import json

data = ['one'  ,   "two", "three"]
jsonstring = json.dumps(data)

with open("reading_writing_files/numbers.json", "w", encoding="utf-8") as jsonfile:
    jsonfile.write(jsonstring)
