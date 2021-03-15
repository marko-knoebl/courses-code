#-------------------------------------------------------------------------------
# copy1.py
#-------------------------------------------------------------------------------
import numpy as np
from copy import deepcopy

# Liste kopieren
l = [1, 2, 3, 4]  #                                                      AUFWAND
k1 = l            # Referenz-Kopie (keine Kopie, COW = Copy on write)    minimal
k2 = l[:]         # Shallow-Kopie (nur Liste, Unterelemente geteilt)     mittel
k3 = l.copy()     # Shallow-Kopie (nur Liste, Unterelemente geteilt)     mittel
k4 = deepcopy(l)  # Deep Kopie (auch alle Unterelemente echt kopiert)    maximal

for elem in (l, k1, k2, k3, k4):
    print("LIST", id(elem), type(elem), elem)

# Bei numpy-Arrays ist "Slicing" keine echte Kopie, nur Teilen des Speichers.
# Beim Slicing entsteht ein Objekt, das Verweise auf geteilten Speicher enthält
# (Slicing bildet eine "View/Sicht" auf Original-Daten= eine Art "Iterator")
# Shallow-Copy gibt es nicht wg. fehlender innerer Objektstruktur        AUFWAND
npl  = np.array(l)     # Konvertierung = Deep Copy)                      maximal
npk1 = npl[:]          # Keine Kopie, sondern gleiche Daten              minimal
npk2 = np.copy(npl)    # Deep Copy wg. fehlender innerer Objektstruktur  maximal
npk3 = npl.copy()      # Deep Copy analog                                maximal

for elem in (npl, npk1, npk2, npk3):
    print("NP-ARRAY", id(elem), type(elem), elem)

# 0/1-er Arrays
print("I1", np.identity(4), sep="\n")
print("I2", np.identity(4, dtype=float), sep="\n")
print("I3", np.identity(4, dtype=int), sep="\n")
print("I4", np.eye(5, 8, 0, dtype=int), sep="\n")
print("I5", np.eye(5, 8, 2, dtype=int), sep="\n")
print("I6", np.eye(5, 8, -2, dtype=int), sep="\n")
