import urllib.request
import xml.etree.ElementTree as et

API_KEY = "c4e1e7ba330a5be76d64d0440c0f28fe"

QUERY_TEMPLATE = ("http://api.openweathermap.org/data/2.5/weather" +
                  "?q={}&mode=xml&APPID={}&units=metric")

query_string = QUERY_TEMPLATE.format("London", API_KEY)
reply = urllib.request.urlopen(query_string).read()

reply_str = reply.decode("utf-8")
print(reply_str)

reply = reply_str.encode("utf-8")
print(reply)

def get_temperatures_in_cities():
    cities = ["New York", "London", "Tokyo", "Cairo", "Sydney"]
    temperatures = {}
    for city in cities:
        query_string = QUERY_TEMPLATE.format(city, API_KEY)
        reply_str = urllib.request.urlopen(query_string).read().decode("utf-8")
        data = et.fromstring(reply_str)
        for child in data:
            if child.tag == "temperature":
                temperatures[city] = float(child.attrib["value"])
                break
    return temperatures

print(get_temperatures_in_cities())