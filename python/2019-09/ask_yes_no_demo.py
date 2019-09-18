# import from ask_yes_no.py
from ask_yes_no import ask_yes_no

over_18 = ask_yes_no("are you over 18?")
if over_18:
    print("You are an adult")
else:
    print("You are not an adult")

# possible user interaction:

# are you over 18?
# ja
# choose y or n!
# are you over 18?
# y
# (the function will return True)
