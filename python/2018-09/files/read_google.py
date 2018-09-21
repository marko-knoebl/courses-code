import urllib.request
import re

# file-like object
website = urllib.request.urlopen("https://news.ycombinator.com")

content = website.read().decode("utf-8")

oc = re.findall(r'https?://.+?\.com', content)

print(oc)
