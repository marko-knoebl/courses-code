import random
maxvalue = int(input("Please enter upper limit: "))
num = int(input("Generate how many numbers? "))

rand_list = []

for i in range(num):
    random_number = random.randint(1,maxvalue)
    while random_number in rand_list:
        random_number = random.randint(1,maxvalue)
    rand_list.append(random_number)

for i in rand_list:
    print(str(i))