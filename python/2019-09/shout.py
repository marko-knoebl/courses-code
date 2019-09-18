def shout(text, end="!"):
    print(text.upper() + end)

# demo:

shout("abc", ".")
shout("abc")
shout(end="!", text="xyz")

help(shout)
