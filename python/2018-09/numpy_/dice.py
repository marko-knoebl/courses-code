import numpy as np
import matplotlib.pyplot as plt

num_rolls = 10_000_000

num_dice = 10

categories = np.arange(num_dice, 6 * num_dice + 1)

dice = np.random.randint(1, 7, (num_rolls, num_dice))

sums = np.sum(dice, 1)

plt.hist(sums, categories)

plt.show()
