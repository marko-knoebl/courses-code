
# Fehler abfangen
def get_number():
    number_str = input("Enter any integer: ")
    try:
        number = int(number_str)
        print("*" * number)
    except (ValueError, TypeError):
        print("Invalid integer")
        return get_number()
    return number

get_number()