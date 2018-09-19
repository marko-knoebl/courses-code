import random

print("Willkommen!")

with open("./files/vocabulary.txt", encoding="utf-8") as vocfile:
    filecontent = vocfile.read()

lines = filecontent.splitlines()

vocs = [tuple(line.split(": ")) for line in lines]
random.shuffle(vocs)

for voc in vocs:
    guess = input("Bitte gib das englische Wort für {} ein:\n".format(voc[0]))
    if guess == voc[1]:
        print("richtig")
    else:
        print("falsch")
