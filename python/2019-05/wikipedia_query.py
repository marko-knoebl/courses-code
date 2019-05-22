import urllib.request

search_term = input("enter a wikipedia page: ")

search_url = "https://en.wikipedia.org/wiki/" + search_term

content_bytes = urllib.request.urlopen(
                    search_url).read()
content = content_bytes.decode('latin-1')

print(content)

# print all lines that contain the search term

lines = content.split('\n')

for line in lines:
    if search_term in line:
        print('---\n')
        print(line[:60])
