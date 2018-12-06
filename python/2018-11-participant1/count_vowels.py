def count_vowels(s):
    """count the vowels in given string s.
    """
    vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    i = 0
    for character in s:
        if character in vowels:
            i += 1
    return i


# z = count_vowels(input("Enter a string: "))
# print(str(z))
