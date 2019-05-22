def is_valid(input_number):
    """check a credit card number for validity

    takes a string that represents a credit card number
    returns a boolean
    """
    last_digit = input_number[-1]
    first_part = input_number[0:-1]

    computed_digit = compute_check_digit(first_part)
    if last_digit == computed_digit:
        return True
    else:
        return False


def compute_check_digit(input_number):
    number_with_replaced_digits = _replace_digits(input_number)
    
    print(number_with_replaced_digits)

    sum = 0

    for i in range(len(number_with_replaced_digits)):
        # sum = sum + int(number_with_replaced_digits[i])
        sum += int(number_with_replaced_digits[i])

    last_digit = sum % 10
    check_digit = 10 - last_digit

    return str(check_digit)


def _replace_digits(input_sequence):
    replace_list = ["0", "2", "4", "6", "8",
                    "1", "3", "5", "7", "9"]
    output_sequence = ""
    # ex: input_sequence = "1348923648"
    for i in range(len(input_sequence)):
        # ex: i = 0
        j = len(input_sequence) - i - 1
        # ex: j = 9

        old_digit = int(input_sequence[j])
        # ex: old_digit = 8

        # check if j is even or odd
        if i % 2 == 0:
            # even

            new_digit = replace_list[old_digit]
            # new_digit = "7"

        else:
            # odd
            new_digit = str(old_digit)
        output_sequence = new_digit + output_sequence
    
    return output_sequence
