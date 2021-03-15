import numpy as np

B = np.array([1, 2, 3])
print(B)
print(B.shape)

B1 = np.expand_dims(B, 1)
print(B1)

B2 = np.concatenate([B1, B1, B1], 1)
print(B2)
print(B2.shape)

B3 = np.expand_dims(B2, 1)
print(B3.shape)
