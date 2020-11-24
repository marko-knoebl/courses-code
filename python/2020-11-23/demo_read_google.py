import urllib.request

a = urllib.request.urlopen("https://google.com")

content = a.read()

print(content)
print(len(content))
