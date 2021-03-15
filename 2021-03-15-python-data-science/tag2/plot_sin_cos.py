import numpy as np
import matplotlib.pyplot as plt

plt.style.use("seaborn")

x = np.arange(0, 2*np.pi, 0.06)
print(x)

y_sin = np.sin(x)
y_cos = np.cos(x)

plt.plot(x, y_sin, color="C0", marker="", linestyle="dashed")
plt.plot(x, y_cos, color="C5", linestyle=":")
plt.plot(x, -y_sin, "C1.--")


plt.title("Trigonometric functions")
plt.xlabel("x (radians)")
plt.ylabel("y")

plt.plot(x, np.sin(x), label='sin(x)')
plt.plot(x, np.cos(x), label='cos(x)')

plt.legend()

plt.xlim(0, np.pi)

plt.axis("equal")

plt.yticks([-1, 0, 1])
plt.xticks(np.linspace(0, 2*np.pi, 5))

# besondere Punkte
x_special = np.linspace(0, 2*np.pi, 5)
print(x_special)
y_sin_special = np.sin(x_special)
y_cos_special = np.cos(x_special)

plt.plot(x_special, y_sin_special, "C0o")
plt.plot(x_special, y_cos_special, "C1o")

plt.show()

plt.plot(x, y_cos)

plt.show()
