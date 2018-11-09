file = open("message.txt", "w", encoding="utf-8")
file.write("hello world! error error error")
file.close()

file = open("message.txt", "r", encoding="utf-8")
content = file.read()

errorcount = content.count("error")


print(str(errorcount))