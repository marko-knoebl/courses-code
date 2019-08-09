from urllib import request
import sys

# content and length of a website

# usage: python ./get_website https://google.com

url = sys.argv[1]
content = request.urlopen(url).read()
print(content)
print(len(content))
