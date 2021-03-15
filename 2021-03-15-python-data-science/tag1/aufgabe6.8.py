#-------------------------------------------------------------------------------
# aufgabe6.8.py
#-------------------------------------------------------------------------------
import numpy as np
import sys

dt = np.dtype([("h",   "i1"),
               ("min", "i1"),
               ("sek", "i1")])

time_table = np.array([(h, min, sec) for h   in range(24)
                                     for min in range(60)
                                     for sec in range(60)], dtype=dt)

print("LEN", len(time_table), 24 * 60 * 60)
print("SIZE", sys.getsizeof(time_table), 24 * 60 * 60 * (1+1+1))
print("HH", set(time_table['h']))
print("MM", set(time_table['min']))
print("SLICE", time_table['sek'][2:5])   # OK Egal wie rum!
print("SLICE", time_table[2:5]['sek'])   # OK Egal wie rum!
print("ELEMS", time_table[0], time_table[-1])
print("-" * 50)

# Temperatur-Spalte hinzufuegen
dt2 = np.dtype([("h",    "i1"),
                ("min",  "i1"),
                ("sek",  "i1"),
                ("temp", "f2")])

time_temp = np.array([(h, min, sec, 123.4) for (h, min, sec) in time_table], dtype=dt2)

print("ELEMS", time_temp[0], time_temp[-1])
print("LEN", len(time_temp))
print("SIZE", sys.getsizeof(time_temp), 24 * 60 * 60 * (1+1+1+2))
