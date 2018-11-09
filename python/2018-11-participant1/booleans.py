age = int(input("Your age in years is...?"))
age_sec = age * 365 * 24 * 60 * 60
if age_sec >= 10**9 :
    print ("You are a billion seconds old or older: " + str(age_sec))
elif age_sec >= 10**9 < 2 * 10**9
    print ("You are between one billion seconds and two billion seconds old: " + str(age_sec))
else:
    print ("You are younger than a billion seconds: " + str(age_sec))