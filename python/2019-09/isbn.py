def check(isbn):
    """Validate an ISBN number.

    Check whether the last digit of an International serial book number
    matches the other digits.
    """
    check_digit = int(isbn[-1])

    sum = 0

    for i, digit_str in enumerate(isbn):
        sum += int(digit_str) * (i+1)

    actual_digit = sum % 11
    is_valid = actual_digit == check_digit

    return is_valid
