print("hello world")

# pip install numpy

import numpy as np

a1d = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
a2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
a3d = np.array([[[1, 2], [3, 4]], [[5, 6], [7,8]]])

print(a1d)
print(a1d * 3)

print(np.linspace(0, 1.0, 12))
print(np.arange(0, 3.14, 0.1))

rng = np.random.default_rng(seed=2)

a = rng.random((2, 2))
b = rng.integers(1, 7, (2, 2))
print(a)
print(b)

print(a2d[0, 0])
print(a2d[0, :])

print(a2d[:, 1:])
print(a1d[0:8:2])

print(np.sin(a2d))

print(np.eye(3))
