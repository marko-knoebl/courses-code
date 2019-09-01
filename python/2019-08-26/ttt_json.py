import json

field = [
  ['X', 'O', None],
  ['X', 'X', 'O'],
  ['O', 'O', 'X']
]

json_string = json.dumps(field)
with open("field.json", "w") as file:
    file.write(json_string)
