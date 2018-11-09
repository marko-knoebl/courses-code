import random


def generate_lotto(max_val, num):
    return sorted(random.sample(range(1, max_val + 1), num))


print(generate_lotto(49, 6))
print(generate_lotto(45, 6))
