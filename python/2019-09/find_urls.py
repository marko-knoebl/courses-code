website = "https://en.wikipedia.org"

search_regex = r"https?://.+?\.(com|net|org)"

from urllib.request import urlopen

website_content = urlopen(website).read().decode("utf-8")
print(website_content)

# finding URLS:

import re

match_iter = re.finditer(search_regex, website_content)

for match in match_iter:
    print(match[0])


# demo: times

times = re.finditer(
    r'(\d?\d):(\d\d)',
    'The course times are 9:30 - 16:30'
)

for time in times:
    print(f"time: {time[0]}")
    print(f"hour: {time[1]}")
    print(f"minute: {time[2]}")


