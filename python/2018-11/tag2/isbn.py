def check_isbn(isbn):
    """Check whether the ISBN is valid.

    Check whether the string is a valid International Standard Book Number
    (ISBN)."""

    # letzte Ziffer in int verwandelt
    expected_checksum = int(isbn[-1])

    checksum = 0

    for i in range(len(isbn) - 1):
        checksum += (i + 1) * int(isbn[i])
    checksum %= 11
    if checksum == expected_checksum:
        return True
    else:
        return False


print(check_isbn(isbn="3826604237"))
print(check_isbn("3826604239"))
