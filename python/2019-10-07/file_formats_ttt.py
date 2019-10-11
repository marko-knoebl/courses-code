import json
import csv
import pickle

field = [["X", "O", None], ["O", "X", "O"], [None, None, "X"]]

# save as JSON
json_file_content = json.dumps(field)
with open("ttt.json", "w", encoding="utf-8") as json_file:
    json_file.write(json_file_content)

# load from JSON
with open("ttt.json", encoding="utf-8") as json_file:
    json_file_content = json_file.read()
field_from_json = json.loads(json_file_content)

# check if the data are the same as before
print(field == field_from_json)

# save as CSV
with open("ttt.csv", "w", encoding="utf-8", newline="") as f:
    writer = csv.writer(f)
    writer.writerows(field_from_json)

# load from CSV
with open("ttt.csv", encoding="utf-8", newline="") as f:
    reader = csv.reader(f)
    field_from_csv = list(reader)
for row in field_from_csv:
    # in each row, replace '' by None
    for i in range(len(row)):
        cell = row[i]
        if cell == "":
            row[i] = None

print(field_from_json == field_from_csv)

# save as pickle file
pickle_file_content = pickle.dumps(field_from_csv)
with open("ttt.pickle", "wb") as pickle_file:
    pickle_file.write(pickle_file_content)

# load from pickle file
with open("ttt.pickle", "rb") as pickle_file:
    pickle_file_content = pickle_file.read()
field_from_pickle = pickle.loads(pickle_file_content)

print(field_from_pickle == field_from_csv)
