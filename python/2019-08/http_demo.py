import requests

content = requests.get("https://google.com").text

# print(content)

URL = "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22"

data = requests.get(URL).json()

import pprint
pprint.pprint(data)

# jsonplaceholder.com