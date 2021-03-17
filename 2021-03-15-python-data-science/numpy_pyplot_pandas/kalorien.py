import numpy as np
kalorientabelle = np.array([30, 52, 88, 36, 86, 160, 375, 115, 43, 71])

jouletabelle = kalorientabelle * 4.1868
print(jouletabelle)

verzehr_in_gramm = np.array([240, 95, 135, 120, 200, 160, 290, 450, 500, 0])
verzehr_in_kg = verzehr_in_gramm / 1000
print(verzehr_in_kg)

kalorien_pro_gericht = kalorientabelle * verzehr_in_gramm
print(kalorien_pro_gericht)

gesamtkalorien = np.sum(kalorien_pro_gericht)
print(gesamtkalorien)
