#-------------------------------------------------------------------------------
# dtype3.py
#-------------------------------------------------------------------------------
import numpy as np

dt = np.dtype([('country',    np.unicode, 10),
               ('density',    'i4'),
               ('area',       'i4'),
               ('population', 'i2')])

# Daten von CSV-Datei lesen
x = np.loadtxt("population_table.csv",
               dtype=dt,
               delimiter="@")
print("X1", x, sep="\n")

# Daten von CSV-Datei lesen
x = np.genfromtxt("population_table.csv",
                   dtype=dt,
                   delimiter="@",
                   loose=False)
print("X2", x, sep="\n")
