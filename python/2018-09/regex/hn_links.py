import urllib.request
import re

URL = "https://news.ycombinator.com"

content = urllib.request.urlopen(URL).read().decode("utf-8")

print(re.findall(r"https?://.+?\.com", content))
