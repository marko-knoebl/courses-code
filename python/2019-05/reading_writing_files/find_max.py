import json

with open('reading_writing_files/sample.json', encoding="utf-8") as sample_file:
    content_string = sample_file.read()

print(content_string)
sample_data = json.loads(content_string)

print(type(sample_data))
print(sample_data[0])

print(max(sample_data))
