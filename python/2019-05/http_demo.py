import urllib.request

content: bytes = urllib.request.urlopen(
                    "https://www.google.com").read()

print(content.decode('latin-1'))
