# input: enter a city name
# return weather in Vienna
import urllib.request
import xml.etree.ElementTree as et

def get_weather(location):

    api_key = "c4e1e7ba330a5be76d64d0440c0f28fe"
    # read from openweathermap-api via https
    try:
        content: bytes = urllib.request.urlopen(f"https://api.openweathermap.org/data/2.5/weather?q={location}&appid={api_key}&mode=xml&units=metric").read()
    except:
        return "failed"
    # parse answer as xml
    weather = et.fromstring(content)
    for childnode in weather:
        #print(childnode.tag)
        #print(childnode.text)
        #print(childnode.attrib)
        if childnode.tag == "temperature":
            a = str(childnode.attrib['value'])
        if childnode.tag == "weather":
            b = str(childnode.attrib['value'])
    # return temp + weather
    return f"The temperature in {location} is {a}°C and the weather is {b}"

loc = str(input("Enter a capital city name (english only): "))
result = get_weather(loc)
print (result)
