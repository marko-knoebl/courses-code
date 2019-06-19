# standardmodus = zum lesen öffnen
file = open("message.txt", encoding="utf-8")
content = file.read()
file.close()
print(content)
