data = bytes([0b10001001, 0b11001110])

coin_file = open('reading_writing_files/coins.b', "wb")
coin_file.write(data)
coin_file.close()

with open('reading_writing_files/coins.b', "wb") as coin_file:
    coin_file.write(data)
