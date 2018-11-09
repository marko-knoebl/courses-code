import count_vowels

file = open("message.txt", "w", encoding="utf-8")
file.write("lorem ipsem dolor sit ames")
file.close()

file = open("message.txt", "r", encoding="utf-8")
content = file.read()

count = count_vowels.count_vowels(content)


print("number of vowels in message.txt = " + str(count))
