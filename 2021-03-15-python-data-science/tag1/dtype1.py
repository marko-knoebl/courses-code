#-------------------------------------------------------------------------------
# dtype1.py
#-------------------------------------------------------------------------------
import numpy as np

# ACHTUNG: Typische C-Verhaltensweise: bei Überlauf / Unterlauf keine Warnung!
Pixel = np.dtype(np.int8)   # int8 --> Es wird modulo 256 = 2 ** 8 gerechnet
print("Pixel", Pixel)
lst = [[0, 10.1, 20.2, 30.3],
       [40.4, 50.5, 60.6, 70.7],
       [80.8, 90.9, 100, 127] ]
A = np.array(lst, dtype=Pixel)
print("A1", A, sep="\n")

for i in range(1024 + 1):   # int8 --> Es wird modulo 256 = 2 ** 8 gerechnet
    A += 1
print("A2", A, sep="\n")

for i in range(1024 + 1):   # int8 --> Es wird modulo 256 = 2 ** 8 gerechnet
    A -= 1
print("A2", A, sep="\n")
print("-" * 50)

# Overengineered: Record = Tupel besteht nur aus 1 Spalte --> uebertrieben!
Pixel = np.dtype([("color", np.int8)])
print("Pixel", Pixel)
A = np.array(lst, dtype=Pixel)
print("A3", A, sep="\n")
print("A4", A["color"], sep="\n")
