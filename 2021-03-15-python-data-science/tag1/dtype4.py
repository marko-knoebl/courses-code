#-------------------------------------------------------------------------------
# dtype4.py
#-------------------------------------------------------------------------------
import numpy as np

import pickle

# Daten von Pickle-Datei lesen
fh = open("cities_and_times.pkl", "br")   # b=binary, r=raw
cities_and_times = pickle.load(fh)

for elem in cities_and_times:
    print(elem)
print("-" * 50)

for i in range(5):
    print(cities_and_times[i])
print("-" * 50)

# Record-Struktur definieren + Daten konvertieren
time_type1 = np.dtype([('city', 'U30'),
                       ('day',  'U3'),
                       ('time', [('h', np.int8), ('min', np.int8)])])

times1 = np.array(cities_and_times, dtype=time_type1)
print(times1[:4])
print("-" * 50)

# Uhrzeit konvertieren: (hh, mm) --> "HH:MM"
lst = []
for row in times1:
    t = row[2]
    t = F"{t[0]:02d}:{t[1]:02d}"
    lst.append((row[0], row[1], t))

# Record-Struktur definieren + Daten konvertieren
time_type2 = np.dtype([('city', 'U30'),
                       ('day',  'U3'),
                       ('time', 'U5')])
times2 = np.array(lst, dtype=time_type2)
print(times2[:10])

# Daten auf CSV-Datei schreiben
with open("cities_and_times2.csv", "w") as fh:
    for city_data in times2:
        fh.write(",".join(city_data) + "\n")
