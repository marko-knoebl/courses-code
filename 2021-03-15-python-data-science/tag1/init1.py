#-------------------------------------------------------------------------------
# init1.py
#-------------------------------------------------------------------------------
import numpy as np

# Bereich 0.5..5.1 in Schrittweite 8 durchlaufen (Datentyp "int")
x = np.arange(0.5, 6.1, 0.8, int)
print("A1", x)
x = np.arange(0.5, 6.1, 0.8, dtype=int)
print("A2", x)

# Bereich 0.5..4.5 in Schrittweite 8 durchlaufen (Datentyp "float")
# (ohne Endpunkt!)
x = np.arange(0.5, 4.5, 0.8)
print("B1", x)
x = np.arange(0.5, 4.6, 0.8)
print("B2", x)

# Bereich 1..10 in 50 Schritte durchlaufen mit Endpunkt
samples = np.linspace(1, 10, 50, endpoint=True)
print("C1", samples)
# Bereich 1..10 in 50 Schritte durchlaufen ohne Endpunkt + Schrittweite zurueck
samples, spacing = np.linspace(1, 10, 50, endpoint=False, retstep=True)
print("C2", samples, spacing)
print("-" * 50)

# Skalar = 0-dim
x = np.array(42)
print("X: ", x)
print("Typ von X:", type(x))
print("Dimension von X:", np.ndim(x), x.ndim)
print("Typ von X-Elem:",              x.dtype)     # Fkt. geht nicht

# Vektor = 1-dim
F = np.array([1, 1, 2, 3, 5, 8, 13, 21])
V = np.array([3.4, 6.9, 99.8, 12.8])
print("F: ", F)
print("V: ", V)
print("Typ von F:", F.dtype)
print("Typ von V:", V.dtype)
print("Dimension von F:", np.ndim(F))
print("Dimension von V:", np.ndim(V))

# Array = 2-dim
A = np.array([
    [3.4, 8.7, 9.9],
    [1.1, -7.8, -0.7],
    [4.1, 12.3, 4.8],
])
print("Array A:", A, sep="\n")
print("Dimension von A:", A.ndim)
print("-" * 50)

# Array = 2-dim
x = np.array([
    [67, 63, 87],
    [77, 69, 59],
    [85, 87, 99],
    [79, 72, 71],
    [63, 89, 93],
    [68, 92, 78],
])
print("Array x1:", x, sep="\n")
print("Shape von x1:", np.shape(x))
print("Dimension von x1:", x.ndim)

# Array-Form aendern (Anz. Elemente 18 = 6 * 3 = 2 * 9 = 2 * 3 * 3 muss passen)
x.shape = (2, 9)
print("Array x2:", x, sep="\n")
print("Shape von x2:", np.shape(x))
print("Dimension von x2:", x.ndim)

# Array-Form aendern (Anz. Elemente 18 = 6 * 3 = 2 * 9 = 2 * 3 * 3 muss passen)
x.shape = (2, 3, 3)
print("Array x3:", x, sep="\n")
print("Shape von x3:", np.shape(x))
print("Dimension von x3:", x.ndim)
print("-" * 50)

# Element-Zugriff
B = np.array([ [[111, 112], [121, 122]],
               [[211, 212], [221, 222]],
               [[311, 312], [321, 322]] ])

print("B:", B, sep="\n")
print("Element B[0,1,0]:", B[0][1][0])   # Hoeherer Aufwand wg. Python-Objekten
print("Element B[0,1,0]:", B[0,1,0])     # Geringerer Aufwand weil komplett in Numpy (geht in normalen Python-Objekt leider nicht)
print("-" * 50)

# Slicing-Zugriff
A = np.array([
   [11, 12, 13, 14, 15],
   [21, 22, 23, 24, 25],
   [31, 32, 33, 34, 35],
   [41, 42, 43, 44, 45],
   [51, 52, 53, 54, 55]])

# Slice: ersten 3 Zeilen 0-2, letzte 3 Spalten 2-4
print("A:", A, sep="\n")
print("A-Slice1:", A[:3, 2:], sep="\n")

# Analoger Slice-Zugriff per Schleifen (aufwendiger)
print("A-Slice2:")
for zeile in A[:3]:
    for wert in zeile[2:]:
        print(wert, end=", ")
    print()

print("A-Slice3:", A[3:, :], sep="\n")    # Zeile 3-5, alle Spalten
print("A-Slice4:", A[:, 4:], sep="\n")    # Alle Zeilen, Spalte 4 = letzte Spalte)
print("A-Slice5:", A[:, -1:], sep="\n")   # Alle Zeilen, letzte Spalte
print("-" * 50)

# Slicing mit Schrittweite
X = np.arange(28).reshape(4, 7)
print("X:", X, sep="\n")
print("X-Slice:", X[::2, ::3], sep="\n")  # Jede 2. Zeile, jede 3. Spalte
print("-" * 50)

# Slicing von 3-dim Array
A = np.array([
    [ [45, 12, 4], [45, 13, 5], [46, 12, 6] ],
    [ [46, 14, 4], [45, 14, 5], [46, 11, 5] ],
    [ [47, 13, 2], [48, 15, 5], [52, 15, 1] ],
])
print("A", A.ndim, np.shape(A))
print(A)
A2 = A[1:3, 0:2]                        # Matrix 1-2, Zeile 0-1, alle Spalten
print("A2", A2.ndim, np.shape(A2))
print(A2)
A3 = A[1:3, 0:2, :]                     # Matrix 1-2, Zeile 0-1, alle Spalten
print("A3", A3.ndim, np.shape(A3))
print(A3)
A4 = A[1:, :2]                          # Matrix 1-2, Zeile 0-1, alle Spalten
print("A4", A4.ndim, np.shape(A4))
print(A4)
A5 = A[1:, :2, :]                       # Matrix 1-2, Zeile 0-1, alle Spalten
print("A5", A5.ndim, np.shape(A5))
print(A5)
print("-" * 50)

# Datentyp Numpy-Array
# Zero copy = gar keine Kopie, sondern nur Verweise auf die gleichen Daten
# (im Gegensatz zu Slicing bei Python-Liste!)
A = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
print("A", A)
S = A[2:6]
S[0] = -22
S[1] = -23
print("S", S)
print("A", A)
print("M", np.may_share_memory(A, S))

# Echte Kopie
S = A[2:6].copy()
S[0] = 922
S[1] = 923
print("S", S)
print("A", A)
print("M", np.may_share_memory(A, S))
print("-" * 50)

# Datentyp "list" = Shallow copy (kein deep copy)
lst = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print("L", lst)
lst2 = lst[2:6]
print("L2", lst2)
lst2[0] = -22
lst2[1] = -23
print("L", lst)
print("L2", lst2)
