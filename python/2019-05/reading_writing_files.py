file = open('hello.txt', 'w', encoding="utf-8")
file.write('test')
file.close()

file_r = open('reading_writing_files.py', encoding='utf-8')
contents = file_r.read()
file_r.close()
print(contents)
