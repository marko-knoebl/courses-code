file = open("message.txt", encoding="utf-8")
content = file.read()

# überprüfe, wie oft "error" vorkommt:
errorcount = content.count("error")

print(f"Im log sind {errorcount} fehler vorhanden")
