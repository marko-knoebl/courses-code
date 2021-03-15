#-------------------------------------------------------------------------------
# aufgabe5.8.py
#-------------------------------------------------------------------------------
import numpy as np

def show(name, v):
    print()
    print("VAR", name)
    print("LEN", len(v))
    print("TYPE", type(v))
    print("ELEMTYPE", type(v[0]))
    print(v)

v0 = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
v1 = np.array(range(10))
v2 = np.arange(10, dtype=float)

show("V0", v0)
show("V1", v1)
show("V2", v2)

vu = v1[1::2]
show("VU", vu)

vr = v1[::-1]
show("VR", vr)
#v1.reverse()
print(reversed(v1))  # geht nicht

a = np.array([1, 2, 3, 4, 5])
show("A", a)
b = a[1:4]
b[0] = 200
print(a[1])
show("A", a)
show("B", b)

m = np.array([[1, 2, 3, 4, 5],
              [6, 7, 8, 9, 10],
              [11, 12, 13, 14, 15]])
m = np.reshape(np.arange(1, 16), (3, 5))

show("M", m)
mr = m[:, ::-1]
show("MR", mr)
mz = m[::-1, :]
show("MZ", mz)
mrz = m[::-1, ::-1]
show("MRZ", mrz)
min = m[1:-1, 1:-1]
show("MIN", min)

print(np.may_share_memory(min, m))
print(np.may_share_memory(m, min))

# Nur den "Rand" der zwei-dimensionalen Matrix
# (also das in der vorherigen Aufgabe extrahierte "Innere" weglassen)
rand = [
    m[0, :],    # Oberste Zeile
    m[:, 0],    # Erste Spalte
    m[-1, :],   # Unterste Spalte
    m[:, -1],   # Letzte Spalte
]
show("RAND", rand)

# Das "Innere" mit 0 fuellen (Rand uebriglassen)
# (m und min ueberlappen sich!)
m[1:-1, 1:-1] = np.zeros_like(min)
#min = np.zeros_like(min)        # CoW = "Copy on Write" schlaegt zu
show("MIN", min)
show("M", m)

min[:, :] = np.ones_like(min)    # Inneres ueberschreiben
show("MIN", min)
show("M", m)
