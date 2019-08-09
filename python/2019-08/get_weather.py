import json
from urllib import request


def load_demo_data():
    """Load demo data for London as a Python dict."""

    URL = "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22"

    json_string = request.urlopen(URL).read()

    data = json.loads(json_string)
    return data

def get_temperature():
    """Get the temperature in London in °C."""
    data = load_demo_data()
    return data["main"]["temp"] - 273

print(get_temperature())
