import random

num = random.randint(1,10)
right = False
i = 0
while right == False and i<100:
    i = i+1
    guess_num = int(input("Guess the integer between 1 and 10: "))
    if num == guess_num :
        right = True
        print ("Right!")
    else:
        if num < guess_num :
            print ("Too high!")
        else :
            print ("Too low!")
print("Game over!")