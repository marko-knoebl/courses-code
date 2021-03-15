#-------------------------------------------------------------------------------
# first.py
#-------------------------------------------------------------------------------
import sys
import numpy as np
import matplotlib.pyplot as plt

# Mischen bei list geht --> np.array von Strings --> konvertieren nicht moeglich!
#pyval = [20.1, 20.8, 21.9, 22.5, 22.7, 21.8, 21.3, 20.9, 20.1, "hallo", 1234]
#pyval = [20.1, 20.8, 21.9, 22.5, 22.7, 21.8, 21.3, 20.9, 20.1, 1234]
pyval = [20.1, 20.8, 21.9, 22.5, 22.7, 21.8, 21.3, 20.9, 20.1]
#pyval = list(range(10000))
print("ANZ", len(pyval), type(pyval), type(pyval[0]))
print("SIZE", sys.getsizeof(pyval) + len(pyval) * sys.getsizeof(pyval[0]))
print("C-SIZE", len(pyval) * 8)     # Python-float = C-double = 64 Bit = 8 Byte

npv = np.array(pyval)
print(len(npv), type(npv), npv, type(npv[0]))
print("NP-SIZE", sys.getsizeof(npv))
print("NP-ELEM-DTYPE", npv.dtype)

npv = np.array(pyval, dtype="float16")
print(len(npv), type(npv), npv, type(npv[0]))
print("NP-SIZE", sys.getsizeof(npv))
print("NP-ELEM-DTYPE", npv.dtype)

npv = np.array(pyval, dtype="int8")
print(len(npv), type(npv), npv, type(npv[0]))
print("NP-SIZE", sys.getsizeof(npv))
print("NP-ELEM-DTYPE", npv.dtype)

npv = np.array(pyval, dtype="int64")
print(len(npv), type(npv), npv, type(npv[0]))
print("NP-SIZE", sys.getsizeof(npv))
print("NP-ELEM-DTYPE", npv.dtype)

npv = np.array(pyval)
print(len(npv), type(npv), npv, type(npv[0]))
print("NP-SIZE", sys.getsizeof(npv))
print("NP-ELEM-DTYPE", npv.dtype)

# npv = np.array([])
# print(len(npv), type(npv))
# print("NP-SIZE", sys.getsizeof(npv))

print("LETZTES ELEMENT", npv[-1])   # npv --> Referenz npv-Objekt --> Index-Zugriff
#                                   # letzte Referenz --> Element-Objekt --> Wert
#                                   # Numpy: npv --> Referenz npv-Objekt --> Index-Zugriff
#                                   # auf den Wert direkt
# Im Hintergrund echte C-Datenstruktur <-> In C implementierte Funktionen die direkt darauf
# arbeiten

print("PY-VAL", pyval)
# pyval = pyval * 9 / 5 + 32
# Schleife
helplist = []
for elem in pyval:
    helplist.append(elem * 9/5 + 32)
print("HELP-VAL", helplist)

# List comprehension (syntaktische Kurzform einer Schleife = mathem. Mengenschreibweise
pyval = [elem * 9 / 5 + 32 for elem in pyval]
print("PY-VAL", pyval)
print("NP-VAL", npv)

for e in (npv[0], npv[-1]):
    print("ELEM", e, type(e), id(e))

# Das kann Python so nicht direkt auf Liste, kann nur Numpy-Array
print("NPV", id(npv))
npv = npv * 9 / 5 + 32
print("NP-VAL", npv)

# Grafik zeichnen + anzeigen
plt.plot(npv)
plt.show()

# Numpy-Array wie alle anderen Objekte in Liste, Tupel, Dict, ... als Element verwendbar
l = [123, npv, "hallo"]

# Numpy-Array wie alle anderen Obj. an Funktion uebergebbar und zurueckgebbar
def f(l):
    print(len(l), type(l))
    return l * 200

erg = f(npv)
print("ERG", type(erg), len(erg), erg[0], erg[-1])
