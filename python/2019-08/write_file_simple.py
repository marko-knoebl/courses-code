# zum schreiben öffnen (w = write)
# als utf-8-Datei öffnen

with open("message.txt", "w", encoding="utf-8") as file:
    file.write("hello world")

# standardmodus = zum lesen öffnen
with open("message.txt", encoding="utf-8") as file:
    content = file.read()
print(content)
