import random

class roulette():
    def __init__(self):
        self.i = 6
    def __iter__(self):
        return self
    def __next__(self):
        self.i -= 1
        if self.i < 0:
            raise StopIteration()
        return random.randint(0, 36)


for r in roulette():
    print(r)
