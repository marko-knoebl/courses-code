# parameter type: str
# return type: int

def gtin_check_digit(gtin_without_check_digit):
    length = len(gtin_without_check_digit)

    digits_after_tripling = []

    # go through digits in reverse order
    for i in range(1, length+1):
        # i = 1 ... 12
        digit = int(gtin_without_check_digit[-i])
        # maybe triple the digit, then put it in the list
        if i % 2 == 0:
            # i = 2, 4, 6, ...
            digits_after_tripling.insert(0, digit)
        else:
            # i = 1, 3, 5, ...
            digits_after_tripling.insert(0, digit * 3)
    
    # compute the sum
    # sum = 0
    # for digit in digits_after_tripling:
    #     sum = sum + digit
    sum_of_digits = sum(digits_after_tripling)

    remainder = sum_of_digits % 10

    result = 10 - remainder
    return result

print(gtin_check_digit)
print(gtin_check_digit("501025505020")) # last digit: 5
