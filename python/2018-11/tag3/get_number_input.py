while True:

    number_str = input("Enter a number: ")

    # Fehler abfangen
    try:
        number = int(number_str)
        print("*" * number)
        break
    except ValueError:
        print("invalid number")
