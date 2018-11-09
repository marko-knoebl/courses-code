word = input("Enter a secret word: ")

# verbleibende rateversuche
turns = 8

character_list = []

for character in word:
    if character not in character_list:
        character_list.append(character)

while turns > 0:
    print("you have " + str(turns) + " guesses")
    letter = input("guess:")
    if letter not in character_list:
        print("wrong")
        turns -= 1
    else:
        print("correct")
