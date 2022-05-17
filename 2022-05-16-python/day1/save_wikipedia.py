from urllib.request import urlopen

content = urlopen("https://en.wikipedia.org").read()

file = open("wikipedia.html", "w", encoding="utf-8")
file.write(content.decode("utf-8"))
