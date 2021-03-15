#-------------------------------------------------------------------------------
# slice1.py
#-------------------------------------------------------------------------------
import numpy as np

X = np.array(
       [[[3, 1, 2],
         [4, 2, 2]],
        [[-1, 0, 1],
         [1, -1, -2]],
        [[3, 2, 2],
         [4, 4, 3]],
        [[2, 2, 1],
         [3, 1, 3]]])
print("X", X.ndim, X.shape)
print(X)

# Aeussere Dimension = Zeilen = Ebene 1
print("\nDimension 0 with size", X.shape[0])
for i in range(X.shape[0]):
    print(i, ":")
    print(X[i, :, :])

# Mittlere Dimension = ??? = Ebene 2
print("\nDimension 1 with size", X.shape[1])
for i in range(X.shape[1]):
    print(i, ":")
    print(X[:, i, :])

# Innere Dimension = Spalten = Ebene 3
print("\nDimension 2 with size", X.shape[2])
for i in range(X.shape[2]):
    print(i, ":")
    print(X[:, :, i])   # Tippfehler auf Seite 62 im Buch
print("-" * 50)

# 0-er oder 1-er Arrays
print("Z1", np.zeros((4, 3, 2), dtype=int), sep="\n")
print("Z2", np.ones((2, 4, 3), dtype=float), sep="\n")
print("Z3", np.zeros_like(X), sep="\n")
print("Z4", np.ones_like(X), sep="\n")
