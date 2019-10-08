def shout(phrase, end="!"):
    """Prints a phrase in capital letters.

    A second optional parameter can mark the end.
    """
    # .upper() is a string function that converts the
    # string to uppercase
    upper = phrase.upper()
    print(upper + end)

shout("hello") # HELLO!
shout("hey")
shout("hi", ".") # HI.
