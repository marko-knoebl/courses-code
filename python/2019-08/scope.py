m = "Hello, world"
n = "hi!"
o = "hey"

def average(a, b):

    # lesen von globalen Variablen ist erlaubt
    print(o)

    # um globale Variablen schreiben zu können:
    # als global deklarieren
    global n
    print(n)
    n = 3

    # m ist eine lokale Variable
    m = (a + b) / 2
    return m

x = average(1, 2)

print(m)
print(n)
print(o)
