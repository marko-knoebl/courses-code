import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 20, 201)
print(x)
y = np.sin(x)

plt.plot(x, y)
plt.show()