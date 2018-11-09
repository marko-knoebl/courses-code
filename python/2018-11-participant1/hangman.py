word = input("Enter a secret word in lower case letters only: ")

turns = 10

character_list = []
word_list = []
show_list = []
wrong_list = []

for character in word:
    show_list.append("-")
    word_list.append(character)
    if character not in character_list:
        character_list.append(character)

while turns > 0 :
    print("You have " +str(turns) + " guesses left!" )
    letter = input("Enter a letter: ")
    if letter not in character_list:
        wrong_list.append(letter)
        print("wrong: " + str(wrong_list))
        turns -= 1
    else:
        print("right")
        for i in range(len(word_list)):
            if letter == word_list[i]:
                show_list[i] = letter
        print(str(show_list))
        character_list.pop(character_list.index(letter))
        if character_list == []:
            print("you won!")
            print(word)
            turns=0
if character_list != []:
    print("you lose!")
