from urllib import request
import re

website_content = request.urlopen(f'https://news.ycombinator.com').read().decode("utf-8")
print(website_content)

urls = re.findall("https?://.+?\\.com", website_content)
for item in urls:
    print(item)
