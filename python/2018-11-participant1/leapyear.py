right = False
while right == False:
    year = int(input("Enter year: "))
    res = year%4
    res100 = year%100
    res400 = year%400
    if res400 == 0:
        right = True
        print ("Is leap year!")
    else:
        if res == 0 and res100 !=0 :
            right = True
            print ("Is leap year!")
        else:
            print ("Is not a leap year!")