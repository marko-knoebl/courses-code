celsius = [39.2, 36.5, 37.3, 37.8]

# filter: belässt Einträge in der liste oder wirft sie hinaus -
# je nachdem ob das lambda für diesen Eintrag True oder False zurückgibt
high = list(filter(lambda temp_c: temp_c > 37, celsius))
print(high)

high = [temp_c for temp_c in celsius if temp_c > 37]


# (9/5)*x + 32

fahrenheit = list(map(lambda temp_c: (9 / 5) * temp_c + 32, celsius))

# def convert(temp_c):
#     return (9/5)*temp_c + 32

# convert = lambda temp_c: (9/5)*temp_c + 32

print(fahrenheit)

fahrenheit = [(9 / 5) * temp_c + 32 for temp_c in celsius]

print(fahrenheit)
