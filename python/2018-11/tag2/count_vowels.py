def count_vowels(s):
    # Count the vowels in the string s

    vowels = ["a", "e", "i", "o", "u"]
    
    n = 0

    for letter in s:
        if letter in vowels:
            n += 1

    return n

print(count_vowels("apple"))
print(count_vowels("banana"))
