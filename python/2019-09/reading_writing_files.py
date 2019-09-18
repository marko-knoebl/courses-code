from urllib.request import urlopen

url = "https://en.wikipedia.org/wiki"

# downloading wikipedia front page
contents_bytes = urlopen(url).read()
# decoding from bytes to string
contents = contents_bytes.decode("utf-8")
print(contents)

# write to file wikipedia.html
file_wikipedia = open("wikipedia.html", "w", encoding="utf-8")
file_wikipedia.write(contents)
file_wikipedia.close()

# write to file wikipedia.html (shorter version)
with open("wikipedia.html", "w", encoding="utf-8") as file_wikipedia:
    file_wikipedia.write(contents)

# open for writing (w = write)
# open as a utf-8 file
file = open("message.txt", "w", encoding="utf-8")
file.write("hello world")
file.close()

# default mode = open for reading
file = open("message.txt", encoding="utf-8")
content = file.read()
file.close()
print(content)
