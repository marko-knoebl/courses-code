#-------------------------------------------------------------------------------
# arrayop1.py
#-------------------------------------------------------------------------------
import numpy as np

A = np.array([3, 4, 5])
B = np.array([1,9,0])
C = np.array([-1, -2, -3])

print("A", A)
print("B", B)
print("C", C)
print()

#-------------------------------------------------------------------------------
# stack                Join sequence of arrays along NEW axis
# row_stack            Stack arrays in sequence vertically (row wise)
# vstack               Stack arrays in sequence vertically (row wise)
# column_stack         Stack 1-D arrays as columns into a 2-D array
# dstack               ...
# concatenate          Join sequence of arrays along EXISTING axis
# hstack               Stack arrays in sequence horizontally (column wise)
#-------------------------------------------------------------------------------
# dsplit               Split array along third axis
# block                Assemble nd-array from nested lists of blocks
#-------------------------------------------------------------------------------
# tile                 Tile an array
# repeat               Repeat elements of an array
# broadcast_to         Broadcast an array to a new shape
#-------------------------------------------------------------------------------
ST = np.stack((A, B, C))          # Zeilen stapeln
RS = np.row_stack((A, B, C))      # Zeilen stapeln
VS = np.vstack((A, B, C))         # Zeilen stapeln
CS = np.column_stack((A, B, C))   # Spalten stapeln
DS = np.dstack((A, B, C))         # Spalten stapeln dstack = column_stack ???
CC = np.concatenate((A, B, C))    # Linearisieren
HS = np.hstack((A, B, C))         # Linearisieren ???

print("STACK:",        ST, sep="\n")
print("ROWSTACK:",     RS, sep="\n")
print("VSTACK:",       VS, sep="\n")
print("COLUMN_STACK:", CS, sep="\n")
print("DSTACK:",       DS, sep="\n")
print("CONCATENATE:",  CC, sep="\n")
print("HSTACK:",       HS, sep="\n")
print()

A = np.array([
    [ 1, 2 ],
    [ 3, 4 ],
])

# Kacheln aneinandersetzen
print("A", A, sep="\n")
X1 = np.tile(A, (1, 4))
print("X1", X1, sep="\n")
X2 = np.tile(A, (3, 1))
print("X2", X2, sep="\n")
X3 = np.tile(A, (3, 4))
print("X3", X3, sep="\n")
