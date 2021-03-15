import numpy as np

points = np.array([[0, 0], [0, 1], [1, 1], [1, 0]])

m = np.array([[np.sqrt(0.5), np.sqrt(0.5)],
              [-np.sqrt(0.5), np.sqrt(0.5)]])

print(points)
print(points @ m)
print(points @ m @ m)
