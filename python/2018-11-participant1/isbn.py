def checksum(isbn):
    sum = 0
    for i in range(1, len(isbn)):
        sum = sum + i * int(isbn[i - 1])
    return sum % 11


z_str = input("Enter ISBN: ")
z_int = int(z_str)
y = checksum(z_str)
if z_str[len(z_str) - 1] == str(y):
    print("ISBN is correct")
else:
    print("ISBN is not correct")
