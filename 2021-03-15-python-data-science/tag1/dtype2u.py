#-------------------------------------------------------------------------------
# dtype2u.py
#-------------------------------------------------------------------------------
import numpy as np

dt = np.dtype([('country',    np.unicode, 20),   # Unicode OK!
               ('density',    'i4'),
               ('area',       'i4'),
               ('population', 'i4')])

population_table = np.array([
   ('Netherlands', 393, 41526, 16928800),
   ('Belgium', 337, 30510, 11007020),
   ('United Kingdom', 256, 243610, 62262000),
   ('Germany', 233, 357021, 81799600),
   ('Liechtenstein', 205, 160, 32842),
   ('Italy', 192, 301230, 59715625),
   ('Switzerland', 177, 41290, 7301994),
   ('Luxembourg', 173, 2586, 512000),
   ('France', 111, 547030, 63601002),
#  ('Austria', 97, 83858, 8169929),
   ('Österreich', 97, 83858, 8169929),
   ('Greece', 81, 131940, 11606813),
   ('Ireland', 65, 70280, 4581269),
   ('Sweden', 20, 449964, 9515744),
   ('Finland', 16, 338424, 5410233),
   ('Norway', 13, 385252, 5033675)], dtype=dt)

print("DENSITY", population_table['density'])
print("COUNTRY", population_table['country'])
print("AREA", population_table['area'][2:5])   # OK egal wie rum!
print("AREA", population_table[2:5]['area'])   # OK egal wie rum!

# Daten auf CSV-Datei schreiben
np.savetxt("population_table.csv",
           population_table,
           #fmt="%s;%d@%d;%d",            # s=string, d=decimal, delimiter ignoriert
           fmt=("%s", "%d", "%d", "%d"),  # delimiter verwendet
           delimiter="@")
