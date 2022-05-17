# vocabulary = {
#     "apple": "Apfel",
#     "pear": "Birne",
#     "banana": "Banane",
#     "strawberry": "Erdbeere",
# }

vocabulary_list = [
    {"en": "apple", "de": "Apfel"},
    {"en": "pear", "de": "Birne"},
    {"en": "banana", "de": "Banane"},
    {"en": "strawberry", "de": "Erdbeere"},
]

import random

num_correct = 0
num_incorrect = 0

while True:
    entry = random.choice(vocabulary_list)

    english_word = entry["en"]
    german_word = entry["de"]

    # {'en': 'pear', 'de': 'Birne'}
    # What is "pear" in German?

    print(f"What is '{english_word}' in German?")
    german_answer = input()

    if german_answer == german_word:
        print("This is correct!")
        num_correct = num_correct + 1
    else:
        print("Incorrect!")
        print(f"The correct answer is '{german_word}'")
        num_incorrect = num_incorrect + 1

    print("Play another round? (y or n)")
    answer = input()
    if answer == "n":
        break

print(f"{num_correct} correct, {num_incorrect} incorrect")


