api_key = "c4e1e7ba330a5be76d64d0440c0f28fe"

# 1 openweathermap-api über das internet (HTTP) abfragen

# 2 antwort als xml parsen

# 3 temperatur, wetter ausgeben

import urllib

import urllib.request

from urllib.request import urlopen, urljoin
from urllib import request

location = "London"

content = urllib.request.urlopen(
    f"https://api.openweathermap.org/data/2.5/weather?q={location}&appid={api_key}&mode=xml&units=metric"
).read()

import xml.etree.ElementTree as et

xml_document = et.fromstring(content)

for child in xml_document:
    # print(child.tag)
    # print(child.text)
    # print(child.attrib)
    if child.tag == "temperature":
        print(child.attrib["value"])
    if child.tag == "weather":
        print(child.attrib["value"])
