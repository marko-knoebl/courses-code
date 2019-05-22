def isprime(n):

    # example: n = 13

    # check if divisible by:
    # 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12

    for i in range(2, n):
        # print("check if divisible by", i)
        if n % i == 0:
            prime = False
            break
    else:
        prime = True
    
    if n == 1:
        prime = False

    return prime
