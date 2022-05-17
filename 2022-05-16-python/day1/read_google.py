from urllib.request import urlopen

content = urlopen("https://google.com").read()
print(content)
print(len(content))
