def is_prime(num):
    for i in range(2,num):
        if num%(i) == 0 :
            return False
    return True

# z = int(input("Enter any integer: "))
# result = is_prime(z)
# if result == True:
#     print (str(z) + " is prime")
# else:
#     print (str(z) + " is not prime")