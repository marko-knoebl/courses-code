from urllib import request
import re

website_content = request.urlopen("https://news.ycombinator.com").read().decode("utf-8")

urls = re.findall("https?://.+?\\.com", website_content)

for url in urls:
    print(url)
