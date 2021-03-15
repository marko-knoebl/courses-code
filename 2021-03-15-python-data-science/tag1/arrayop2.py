#-------------------------------------------------------------------------------
# arrayop1.py
#-------------------------------------------------------------------------------
import numpy as np

kalorientabelle = np.array([30, 52, 88, 36, 86, 160, 375, 115, 43, 71])
print("K1", kalorientabelle)

# kalorientabelle *= 4.1868    # Elementtyp-Aenderung in Numpy-Array unmoeglich
jouletabelle = kalorientabelle * 4.1868   # Bei Erzeugen von neuem Numpy-Arrays schon
print("J0", jouletabelle)

# Typkonvertierung (implizit)
jouletabelle = jouletabelle.round(0)
print("J1", jouletabelle)

# Typkonvertierung (explizit)
jouletabelle = jouletabelle.astype("int16")
print("J2", jouletabelle)

# Alle Elemente addieren
jouletabelle += 10
print("J3", jouletabelle)

# Alle Elemente subtrahieren
jouletabelle -= 10
print("J4", jouletabelle)
print("-" * 50)

# bei /= und //= muessen die Datentypen links und rechts gleich sein!
print("ID1", id(jouletabelle))
jouletabelle //= 4
print("ID2", id(jouletabelle))
jouletabelle = jouletabelle / 4.1868
print("ID3", id(jouletabelle))
print("J5", jouletabelle, sep="\n")
print("-" * 50)

kalorientabelle = np.array([30, 52, 88, 36, 86, 160, 375, 115, 43, 71])
verzehr_in_gramm = np.array([240, 95, 135, 120, 200, 160, 290, 450, 500, 0])
kalorien_aufgenommen = kalorientabelle * verzehr_in_gramm / 100
print(kalorientabelle)
print(verzehr_in_gramm)
print(kalorien_aufgenommen)
print(kalorien_aufgenommen.sum())   # Aufwand klein, numpy-intern
print(sum(kalorien_aufgenommen))    # Aufwand gross, ausserhalb numpy mit python-Objekten
print("-" * 50)

A = np.array([[11, 12, 13], [21, 22, -23], [31, 32, 0]])
B = np.array([[5, 4, 2], [1, 0, 0], [3, 8, 0]])
print("A", A, sep="\n")
print("B", B, sep="\n")
print("Array-Addition A + B (Elementweise)")
print(A + B, sep="\n")
print("Array-Differenz A - B (Elementweise)")
print(A - B, sep="\n")
print("Array-Multiplikation A * B (Elementweise)")
print(A * B, sep="\n")

# 1/0 -> inf, -1/0 -> -inf, 0/0 -> nan
print("Array-Division A / B (Elementweise)")
print(A / B, sep="\n")    # RuntimeWarning: divide by zero encountered in true_divide
print("-" * 50)

# nan = Not a Number
# inf = Infimum
from math import nan, inf
for v in (nan, inf, -inf):
    print(v)

# 1/0 -> inf, -1/0 -> -inf, 0/0 -> nan
import sys
for (n, soll) in ((1, inf),  (-1, -inf), (0, nan)):
    try:
        erg = n / 0  # --> ZeroDivisionError  inf
    except:
        (cls, msg, tb) = sys.exc_info()
        print(n, "/", 0, "->", soll, cls, msg)
print("-" * 50)

# Skalarprodukt bei 1-dim Arrays
A = np.array([1, 2, 3, 4])
B = np.array([5, 6, 7, 8])
print("A", A)
print("B", B)
C = np.dot(A, B)
print("np.dot(A, B)", C)
D = A @ B
print("A @ B", D)
print("-" * 50)

# Skalarprodukt bei 2-dim Arrays (Anz. Spalten links == Anz. Zeilen rechts!)
# --> Zeilen links x Spalten rechts
#A = np.reshape(np.arange(12), (3, 4))
A = np.array([[1, 1, 1, 0],
              [1, 1, 0, 0],
              [1, 0, 0, 0]])
print("A", A, sep="\n")
#B = np.reshape(np.arange(12), (4, 3))
B = np.array([[1, 1, 1],
              [1, 1, 0],
              [1, 0, 0],
              [0, 0, 0]])
print("B", B, sep="\n")
C = A @ B
print("A @ B", C, sep="\n")      # 3x4 @ 4x3 --> 3 x 3
C = np.dot(A, B)
print("A @ B", C, sep="\n")      # 3x4 @ 4x3 --> 3 x 3
D = B @ A
print("B @ A", D, sep="\n")      # 4x3 @ 3x4 --> 4 x 4
D = np.dot(B, A)
print("B @ A", D, sep="\n")      # 4x3 @ 3x4 --> 4 x 4
