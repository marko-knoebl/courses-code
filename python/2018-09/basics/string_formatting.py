city = "Vienna"
temperature = 28.3

# "alte" Syntax
print("weather in %s: %f°C" % (city, temperature))

# neue Methode: .format
print("weather in {1}: {0:.2f}°C".format(temperature, city))

print("weather in {c}: {t:.2f}°C".format(c=city, t=temperature))

# Mit Tupel
parameters = ("Vienna", 28.3)
print("weather in {}: {:.2f}°C".format(*parameters))

# Mit Dictionary
parameters_ = {"city": "Vienna", "temperature": 28.3}
print("weather in {city}: {temperature:.2f}°C".format(**parameters_))

# f-strings
print(f"weather in {city}: {temperature:.2f}°C")
