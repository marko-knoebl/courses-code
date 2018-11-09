# lottery 'num' out of 'maxval'
import random
maxval = int(input("Please enter upper limit: "))
num = int(input("Generate how many numbers? "))
rand_list = []

def lottery (maxval, num):
    for _ in range(num):
        random_number = random.randint(1,maxval)
        while random_number in rand_list:
            random_number = random.randint(1,maxval)
        rand_list.append(random_number)
    return rand_list

lottery(maxval, num)
for i in rand_list:
    print(str(i))