data = bytes([0b01001000, 0b11101000])

filename = "./files/coins.b"

file = open(filename, mode="ba")
file.write(data)
file.close()

with open(filename, mode="ba") as file:
    file.write(data)
