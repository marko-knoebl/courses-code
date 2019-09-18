field = [
  ['X', 'O', None],
  ['X', 'X', 'O'],
  ['O', 'O', 'X']
]

# task:
# save data to JSON file (field.json)
# read data again
# compare original data with round-tripped
#   data

import json

field_string = json.dumps(field)

with open("field.json", "w", encoding="utf-8") as field_file:
    field_file.write(field_string)

with open("field.json", encoding="utf-8") as field_file:
    field_string_roundtripped = field_file.read()
field_roundtripped = json.loads(field_string_roundtripped)

print(field_string == field_string_roundtripped)
print(field == field_roundtripped)

# print first column:

for line in field:
    print(line[0])
